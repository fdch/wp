$(function() {
var myimages = [];
var mysrc = [];
$.get('../updates/people-list', function(data){
  lines = data.split("\n");
  var i;
  for (i = 0; i < lines.length; i++) {
    myimages.push(lines[i]);
    mysrc.push("../img/people/"+lines[i]+".jpg");
  }
  alert(myimages.join + mysrc.join);
});
});
