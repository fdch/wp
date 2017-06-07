$(function(){
  var w = $(window).width();
  var h = $(window).height();
  var thePrompt = window.open("", "", "width=450,height=300,location=0,toolbar=0, resizable=0,scrollbars=0");
  var theHTML = "<head><link rel=stylesheet href='../css/style.css'></style><link rel='shortcut icon' href='../img/favicon'></link><title>Waverly Project Event Form</title></head><body><form><h2>Waverly Project Event Form</h2><h3>Enter password:</h3><input type=password id=karlheinz size=12/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></body>"
  thePrompt.document.documentElement.innerHTML = theHTML;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("karlheinz").value != "stockhausen" ) {
      alert(location + "\n\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\" Try again.");
    } else {
      alert(location + "\nSucess!\n\n\"I no longer limit myself.\"\n\n Karlheinz Stockhausen");
      thePrompt.resizeTo(w*0.7, h*0.8);
      thePrompt.moveBy(w*0.2, h*0.2);
      thePrompt.document.body.innerHTML("<div style='padding:10%'><iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w*0.7 + " height=" + h*0.8 + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe></div>");
    }
}
});