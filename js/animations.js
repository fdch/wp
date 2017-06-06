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