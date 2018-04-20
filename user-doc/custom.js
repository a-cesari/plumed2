$( document ).ready(function() {
console.log('ready');
//Add necessary class to the side bar to only show on mobile devices
$("#side-nav").addClass("w3-sidebar w3-bar-block .w3-animate-left-side-nav desktop-only");
//Add plumed logo
$("#nav-tree").prepend("<div id=\"side-bar-logo\" class=\"mobile-only\"><img src=\"logo.png\" /></div>");

//Open close the main menu (top one) 
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
//Open sidebar
function sidenav_open() {
    main_menu_close();
		$("#side-nav").addClass("is-open");
		$("#myOverlay").addClass("is-active");
};
//Close side bar
function sidenav_close() {
    //document.getElementById("side-nav").style.display = "none";
    $("#side-nav").removeClass("is-open"); //aggiungere anche che ritorna a larghezza desktop
		$("#myOverlay").removeClass("is-active");
};

//Trigger main menu open/close when clicking on #main-nav-button
$( "#main-nav-button" ).click(function() {
	main_menu_trigger();	
});

//Trigger sidebar open/close
$("#side-nav-button").click(function(){ sidenav_open();});
$("#myOverlay").click(function(){ sidenav_close();});

//Function to detect a mobile device
function is_mobile_dev(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		return true;
	}else{
		return false;
	}
}
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

});

