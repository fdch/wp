var createImage = function(src, title) {
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img; 
};

// array of images
var images = [];
var imgpath = "../img/people/";
$(function() {

$.get('../updates/people-list', function(data){
  lines = data.split("\n");
  var i;
  for (i = 0; i < lines.length; i++) {
    images.push(createImage(imgpath+lines[i], lines[i]));
  }
});
var i=0;
$("img").hover(
  function() {
    var that = this;
    that.setAttribute('src', images[i].src);
    var w = that.getAttribute("width");
    var h = that.getAttribute("height");
    var r = w/r;
    var title = that.getAttribute('title');
    alert(title + " is "+ w + "x"+h+" and has ratio:"+r);
  }, function() {
    i++;
  });
});
