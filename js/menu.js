$(function () {
var winWidth = $(window).width();
var winHeight = $(window).height();
var wMenu = winWidth * 0.15;
var wMain = winWidth - wMenu * 0.98;
var wTopImage = wMain;
var mainTop = $("#mainbody").css("top");
var hMain = $("#mainbody").height();
var hMenu = hMain;
var hTopImage = hMenu * 0.25;
var wLogo = wMenu * 0.95;
var wMainMenu = wMenu;
var wSubList = wMainMenu * 0.98;
var mSubList = wMenu + 5;
var hSocial = $("#socialmedia").height();
var topMain = (hSocial * 0.2);

$('.menulink').attr('onClick', 'fdLoadID(this);');

$("#menu").css({
"min-height": winHeight,
"width": wMenu,
"height": hMenu
});


$("#mainbody").css({
"width": wMain,
"top": topMain
});

$("#menu img").css({
"width": wLogo
});

$("#socialmedia").css({
"width": winWidth,
"height": hSocial
});

$(".mainmenu, .title0, subtitle0").css({
"width":wMainMenu
});



$(".subevents, .subconcerts, .submedia, .subpeople").hide();
$(".subevents, .subconcerts, .submedia, .subpeople").hover(function() {
$(this).animate({backgroundColor : "#3399CC"}, 1000);

});
$( "#english" ).click(function() {
$( "#bio-spanish" ).hide(),
$( "#bio-english" ).show();
});

$( "#spanish" ).click(function() {
$( "#bio-english" ).hide(),
$( "#bio-spanish" ).show();
});

$( ".events" ).hover(function() {
$( ".subevents" ).toggle();
});

$( ".concerts" ).hover(function() {
$( ".subconcerts" ).toggle();
});

$( ".media" ).hover(function() {
$( ".submedia" ).toggle();
});

$( ".people" ).hover(function() {
$( ".subpeople" ).toggle();
});

$('#homepage').click(function() { 
document.location = '/';
});


});


