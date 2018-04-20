/*
$( document ).ready(function() {
$("#side-nav").addClass("w3-sidebar w3-bar-block plmd-sidebar");
//$("#side-nav").css("display", "none");
$("#doc-content").before("<button class=\"side-nav-btn w3-button w3-xlarge\" onclick=\"w3_open()\">☰</button>");
$("#side-nav").prepend("<button onclick=\"w3_close()\" class=\"side-nav-close-btn w3-bar-item w3-button w3-large\">Close &times;</button>");
});
function w3_open() {
    document.getElementById("side-nav").style.width = "100%";
    document.getElementById("side-nav").style.display = "block";
}
function w3_close() {
    document.getElementById("side-nav").style.display = "none";
}
*/
$( document ).ready(function() {
$("#side-nav").addClass("w3-sidebar w3-bar-block .w3-animate-left-side-nav desktop-only");
$("#main-nav").addClass("desktop-only");
$("#main-menu").append("<button onclick=\"w3_close2()\" class=\"w3-button w3-large mobile-only\">Close &times;</button>");
//$("#side-nav").prepend("<button onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-large mobile-only\">Close &times;</button>");
//$("body").prepend("<button class=\"side-nav-btn w3-button w3-xlarge mobile-only\" onclick=\"w3_open()\">☰</button>");
//$(".headertitle").after("<button class=\"side-nav-btn w3-button w3-xlarge mobile-only\" onclick=\"w3_open2()\">☰</button>");


});
function w3_open() {
    $("#side-nav").removeClass("desktop-only").addClass("side-nav-open-mobile");
		document.getElementById("myOverlay").style.display = "block";
}
function w3_open2() {
    $("#main-nav").removeClass("desktop-only").addClass("main-nav-open-mobile");
}
function w3_close2() {
    $("#main-nav").removeClass("main-nav-open-mobile").addClass("desktop-only");
}

function w3_close() {
    document.getElementById("side-nav").style.display = "none";
    $("#side-nav").removeClass("side-nav-open-mobile").addClass("desktop-only"); //aggiungere anche che ritorna a larghezza desktop
		document.getElementById("myOverlay").style.display = "none";
}
