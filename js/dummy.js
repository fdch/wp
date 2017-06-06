$(function(){
  var w = $(window).width();
  var h = $(window).height();
  if (w >= 600) w = w*0.5;
  var thePrompt = window.open("", "", "width=300,height=200");
  var theHTML = "";

  theHTML += "Password: <input type=password id='pass' />";
  theHTML += "<p>Click OK when done</p>";
  theHTML += "<input type=button value=OK id='authOK' />";
  thePrompt.document.body.innerHTML = theHTML;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("pass").value != "stockhausen" )
      window.alert(x+": Not correct.");
    else {
      window.alert("Success!");
      thePrompt.close();
      $("body").append("<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w + " height=" + h + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe>");
    }
}
});