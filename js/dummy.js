$(function(){
  var w = $(window).width();
  var h = $(window).height();
  if (w >= 600) w = w*0.5;
  var thePrompt = window.open("", "", "width="+w/2+", height="+h/2);
  var theHTML = "";

  theHTML += "<h4>User</h4>: <input type=text id=mrkfir />";
  theHTML += "<h4>Pass</h4>: <input type=text id=mrklas />";
  theHTML += "<input type=button value=OK id=authOK />";
  thePrompt.document.body.innerHTML = theHTML;

  var mrkfir = thePrompt.document.getElementById("mrkfir").value;
  var mrklas = thePrompt.document.getElementById("mrklas").value;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if(mrkfir === 'karlheinz' && mrklas === 'stockhausen') {
    thePrompt.close();
    $("body").append("<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w + " height=" + h + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe>");
    } else
      window.alert("Try Again");
}
});