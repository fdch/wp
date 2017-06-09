$(function() {
var myimages = [];
var mysrc = [];
var downloadingImages = [];
$.get('../updates/people-list', function(data){
  lines = data.split("\n");
  var i;
  for (i = 0; i < lines.length; i++) {
    myimages.push(lines[i]);
    mysrc.push("../img/people/"+lines[i]+".jpg");
    downloadingImages[i] = new Image();
  }
});
downloadingImages[0].onload = function() {
  myimages[0].src = mysrc[0].src;
};



});
