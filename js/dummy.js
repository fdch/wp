int function doAuthentification(x, y) {
  if(x !== 'karlheinz' ) {
    return 0;
  } else if (y !== 'stockhausen') {
    return 0;
  } else {
    return 1
  }
}

$(function(){
  var w = $(window).width();
  var h = $(window).height();
  if (w >= 600) w = w*0.5;
  var thePrompt = window.open("", "", "width=500");
  var theHTML = "";

  theHTML += "<p>Please provide username and password</p>";
  theHTML += "<br/>";
  theHTML += "Username: <input type='text' id='theUser' placeholder='Enter Username...'/>";
  theHTML += "<br />";
  theHTML += "Password: <input type='text' id='thePass' placeholder='Enter Password...'/>";
  theHTML += "<br />";
  theHTML += "<input type='button' value='OK' id='authOK'/>";
  thePrompt.document.body.innerHTML = theHTML;

  var theUser = thePrompt.document.getElementById("theUser").value;
  var thePass = thePrompt.document.getElementById("thePass").value;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if(doAuthentication(theUser, thePass)) {
      $("body").append("<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w + " height=" + h + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe>");
    } else
      window.alert("Couldn't log in");
}
});