function layoutSetup() {
	var w = $(window).width();
	var h = $(window).height();
	if (w >= 600) {
		w = w*0.5;
	}
	$("article").width(w);
	$("article img").width(w);
	//languagesMenu();
}
//loads the id of the element passed on the content div 
function wpLoadEvent(x) {
	$("#event-load").load("event/" + x);
}
function wpLoadId(x) {
	myID = x.id;
	$("#content").load(myID,layoutSetup());
}

function wpLoad(x) {
	$("#content").load(x, layoutSetup());
}

/* formerly animations.js */

/*
function getRandomColor() {
  	var letters = '567567567CCCCCC'.split('');
  	var color = '#';
  	
  	for (var i = 0; i < 6; i++) 
  	{
    	color += letters[Math.floor(Math.random() * 16)];
  	} 
  	return color;
  	
}
	
$(function () {
	$('.linkit').hover(function() {
		$(this).find('h3').animate({ fontSize : '2.3em', color : "#000"}, 200);
		$(this).find('h4').animate({ fontSize : '1.7em' }, 200);
		$(this).find('h5').animate({ fontSize : '1.3em' }, 200);
		$(this).find('h6').animate({ fontSize : '1.15em' }, 200);
		$(this).animate({ backgroundColor : "#E23314" }, 200);
		},
		function() {
			$(this).find('h3').animate({ fontSize : '2em', color : "#33CCFF" }, 200);
			$(this).find('h4').animate({ fontSize : '1.6em' }, 200);
			$(this).find('h5').animate({ fontSize : '1.1em' }, 200);
			$(this).find('h6').animate({ fontSize : '1.1em' }, 200);
			$(this).animate({ backgroundColor : "black"}, 200);
		});

	$(".title0, .mainmenu").hover(function() {
		$(this).animate({color : getRandomColor(), backgroundColor : getRandomColor() }, 50);
		}, 
		function() {
		$(this).animate({color : "#000", backgroundColor : "#FFF" }, 200);
		});
	$(".hyperimage").hover(function() {
		$(this).animate({ width : "22", height : "22" }, 50);
		}, 
		function() {
		$(this).animate({ width : "20", height : "20"  }, 50);
		});
});
*/

/* formerly, menu.js */

/*
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


*/