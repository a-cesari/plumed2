$( document ).ready(function() {
//Add necessary class to the side bar to only show on mobile devices
$("#side-nav").addClass("w3-sidebar w3-bar-block .w3-animate-left-side-nav desktop-only");
//Add plumed logo
$("#nav-tree").prepend("<div id=\"side-bar-logo\" class=\"mobile-only\"><img src=\"logo.png\" /></div>");

});

//Open close the main menu (top one) 
function main_menu_trigger(){
		panel=document.getElementById("main-menu");
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
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

//Open sidebar
function sidenav_open() {
    main_menu_close();
		$("#side-nav").addClass("is-open");
		$("#myOverlay").addClass("is-active");
}
//Close side bar
function sidenav_close() {
    //document.getElementById("side-nav").style.display = "none";
    $("#side-nav").removeClass("is-open"); //aggiungere anche che ritorna a larghezza desktop
		$("#myOverlay").removeClass("is-active");
}

