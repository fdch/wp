$(function(){
  var w = $(window).width();
  var h = $(window).height();
  var thePrompt = window.open("", "", "width=300,height=200,location=0,toolbar=0, resizable=0,scrollbars=0");
  var theHTML = "<head><link rel=stylesheet href='css/style.css'></style><link rel='shortcut icon' href='img/favicon.png'></link><title>Waverly Project Event Form</title></head><body><form><h2>Waverly Project Event Form</h2><h3>Enter password:</h3><input type=password id=karlheinz size=9/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></body>"
  thePrompt.document.documentElement.innerHTML = theHTML;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("karlheinz").value != "stockhausen" ) {
      thePrompt.close();
      window.alert("\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\" Try again.");
    } else {
      thePrompt.close();
      window.alert("Sucess!\n\n\"I no longer limit myself.\"\n\n Karlheinz Stockhausen");
      $("body").append("<iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w*0.9 + " height=" + h*0.9 + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe>");
    }
}
});