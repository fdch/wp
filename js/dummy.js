$(function(){
  var w = $(window).width();
  var h = $(window).height();
  var thePrompt = window.open("", "", "width=300,height=200");
  var theHTML = "<head><link rel=stylesheet href='css/style.css'></style><link rel='shortcut icon' href='img/favicon.png'></link><title>Waverly Project Event Form</title></head><body><h3>Enter password to access Waverly Project Event Form</h3><input type=password id=karlheinz size=9/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></body>"
  thePrompt.document.documentElement.innerHTML = theHTML;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("karlheinz").value != "stockhausen" ) {
      thePrompt.close();
      window.alert("Incorrect Password. Please refresh the page.");
    } else {
      thePrompt.close();
      window.alert("Sucess!\n\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\"\n KS");
      $("body").append("<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w + " height=" + h + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe>");
    }
}
});