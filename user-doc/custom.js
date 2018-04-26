$( document ).ready(function() {
	console.log('ready');
	viewport_h=document.documentElement.clientHeight;
	viewport_w=document.documentElement.clientWidth;
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	console.log('w='+w);
	$(".title").addClass("h1");
	$("#MSearchClose").prepend("<span class=\"mobile-only\">&times;</span>");
	$("#MSearchCloseImg").addClass("desktop-only");
	//Add necessary class to the side bar to only show on mobile devices
	if($("#side-nav").length){
		$("<div class=\"w3-overlay w3-animate-opacity\" style=\"cursor:pointer\" id=\"myOverlay\"></div>").insertBefore("#top");
		$("#titlearea").prepend("<button id=\"side-nav-button\" class=\"side-nav-btn w3-button w3-xlarge mobile-only\" style=\"display:none;\">☰</button>");
		$("#side-nav").addClass("w3-sidebar w3-bar-block w3-animate-left desktop-only");
		//Add plumed logo
		$("#nav-tree").prepend("<div id=\"side-bar-logo\" class=\"mobile-only\"><img src=\"logo.png\" /></div>");
		$("#side-bar-logo").append("<span id=\"close-nav-icon\" class=\"mobile-only\">&times;</span>");
	
		//Open sidebar
				function sidenav_open() {
						main_menu_close();
						$("#side-nav").addClass("is-open");
						$("#myOverlay").addClass("is-active");
						//Prevent page scrolling when sidenav is open
						$("body,html").css("overflow","hidden");
						//document.getElementById("side-nav").style.setProperty( 'height', h+'px', 'important' );
						//document.body.style.setProperty( 'scroll', 'no', 'important' );
				};
				//Close side bar
				function sidenav_close() {
						//document.getElementById("side-nav").style.display = "none";
						$("#side-nav").removeClass("is-open"); //aggiungere anche che ritorna a larghezza desktop
						$("#myOverlay").removeClass("is-active");
						//Let page scroll again when sidenav is closed
						$("body,html").css("overflow","auto");
						//document.getElementById("side-nav").style.setProperty( 'height', '100%', 'important' );
				};
			
				$("#close-nav-icon").click(function(){
        	sidenav_close();
				});
				$("#nav-tree li").click(function(){
					alert('click');
				});
				
				//Trigger sidebar open/close
				$("#side-nav-button").click(function(){ sidenav_open();});
				$("#myOverlay").click(function(){ sidenav_close();});

	}
				/*
				$(window).resize(function(){
					document.getElementById("doc-content").style.removeProperty('height');
				});
				viewport_h=document.documentElement.clientHeight;
				console.log(viewport_h);
				*/
				//Open close the main menu (top one) 
				if($("#main-menu").length){
					$("#titlearea").append("<button id=\"main-nav-button\" class=\"main-nav-btn w3-button w3-xlarge mobile-only\" style=\"display:none;\">☰</button>");
					function main_menu_trigger(){
						panel=document.getElementById("main-menu");
						if (panel.style.maxHeight){
							panel.style.maxHeight = null;
							$("#main-menu").removeClass("is-open");
							$("#MSearchResultsWindow").hide();
							$("#MSearchField").val('Search');
						} else {
							$("#main-menu").addClass("is-open");
							panel.style.maxHeight = panel.scrollHeight + "px";
						}
					};
				
				//Close main menu.
				//If main menu is open when trying to open the left side bar, main menu is closed by calling this function
					function main_menu_close(){
						panel=document.getElementById("main-menu");
						if (panel.style.maxHeight){
							panel.style.maxHeight = null;
						} 
					}
				
								
				//Trigger main menu open/close when clicking on #main-nav-button
				$( "#main-nav-button" ).click(function() {
					main_menu_trigger();	
				});
			}
				
				//Function to detect a mobile device
				function is_mobile_dev(){
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						return true;
					}else{
						return false;
					}
				}

				/*
				//When setting doc-content overflow:initial to allow page scroll, this is necessary. 
				//Not needed anymore.

				//Detect if mobile phones keyboard is active or not

				function detect_keyboard(){
					var _originalSize = $(window).width() + $(window).height()
					$(window).resize(function(){
						if($(window).width() + $(window).height() != _originalSize){
							console.log("keyboard show up");
							$("#nav-path").hide();
							return true;
						}else{
							console.log("keyboard closed");
							$("#nav-path").show();
							return false;
						}
					});
				}

				if(is_mobile_dev()){ detect_keyboard(); }
				*/

				//Scroll to search bar when clicked on it
				$("#MSearchField").click(function(){
					if(is_mobile_dev() && $("#main-menu").hasClass("is-open")){
						scrollTo();
					}else{
						return false;
					}
				});

				function scrollTo() {
					$('html, body').animate({ scrollTop: $("#MSearchBox").offset().top }, 'slow');
					return false;
				};
				
				function showTooltip(elem, msg) {
    			elem.setAttribute('class', 'copy-btn tooltipped tooltipped-s tooltipped-no-delay');
    			elem.setAttribute('aria-label', msg);
				}

			function fallbackMessage(action) {
				var actionMsg = '';
				var actionKey = (action === 'cut' ? 'X' : 'C');
					if (/iPhone|iPad/i.test(navigator.userAgent)) {
						actionMsg = 'No support :(';
					} else if (/Mac/i.test(navigator.userAgent)) {
						actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
					} else {
						actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
					}
				return actionMsg;
			}		
				var clipboard = new ClipboardJS('.copy-btn');
				clipboard.on('success', function(e) {
    			//console.info('Action:', e.action);
    			//console.info('Text:', e.text);
    			//console.info('Trigger:', e.trigger);
					//e.trigger.classList.add("tooltipped");
					//e.trigger.classList.add("tooltipped-s");
					//e.trigger.classList.add("tooltipped-no-delay");
					//e.trigger.setAttribute("aria-label","Copied!");
    			e.clearSelection();
					showTooltip(e.trigger, 'Copied!');
				});

				clipboard.on('error', function(e) {
    			//console.error('Action:', e.action);
    			//console.error('Trigger:', e.trigger);
					showTooltip(e.trigger, fallbackMessage(e.action));
				});
				if(ClipboardJS.isSupported()){
					copyId=0;
					//newSelectBox.setAttribute("id","select-"+_selectIndex++);
					$("pre.fragment").each(function( index ) {
						$(this).wrapInner("<code class=\"copy-to-clipboard\"></code>");
  					$(this).attr("id","copy-"+copyId);
						$(this).prepend("<button type=\"button\" class=\"copy-btn\" data-clipboard-target=\"#copy-"+copyId+"\"><img class=\"clippy\" width=\"13\" src=\"clippy.svg\" alt=\"Copy to clipboard\"></button>");
						//$("<span style=\"display:flex;margin-right:8px;\"><button type=\"button\" style=\"margin-left:auto;\" class=\"copy-btn\" data-clipboard-target=\"#copy-"+copyId+"\"><img class=\"clippy\" width=\"13\" src=\"clippy.svg\" alt=\"Copy to clipboard\"></button></span>").insertBefore(this);
						copyId++;
					});
				}else{
					clipboard.destroy();
				}

				var btns = document.querySelectorAll('.copy-btn');
					for (var i = 0; i < btns.length; i++) {
    			btns[i].addEventListener('mouseleave', clearTooltip);
    			btns[i].addEventListener('blur', clearTooltip);
				}
				function clearTooltip(e) {
    			e.currentTarget.setAttribute('class', 'copy-btn');
    			e.currentTarget.removeAttribute('aria-label');
				}
				
});

