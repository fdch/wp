////////////
//// Please be extra careful when you edit this file
////////////
var w, h, t, te; //width height content-target event-target
var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=logo><img src='" + logoimage[0] + "' width="+ logoimage[1] +" height="+ logoimage[2] +"/></div><div id=menu></div><div id=content></div>";
////////////
//// Loading glue
////////////
function wpLoadEvent(x) {te.load("event/" + x);}
function wpLoadId(x) {t.load(x.id);}
function wpLoad(x) {t.load(x)}
////////////
//// Menu functions
////////////
function makeMenu(m) {
  var i,j;
  m.append("<nav>");
  for (i = 0;i < window.menuitems.lenght; i++) {
    m.append("<span class=menuitem onClick=\"get" + window.menuitems[i] + "()\">" + window.menuitems[i] + "</span>");
  }
  m.append("</nav>");
  alert(window.menuitems.lenght);
}
function getEvents() {
  var events = "<article><h3>Events</h3><p>"+ eventsText + "</p><div id=event-menu></div><div id=event-load></div></article>"
  t.append(events);
  te.load("event/menu");
}
function getPeople() {
  t.append("<article><h3>People</h3><div id=people-list></div></article>");
  jQuery.get('updates/people-list', function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      $("#people-list")
      .append("<div id=" + elem + " onClick=wpLoadId(this)><h4>" + elem + "</h4><img src='img/people/" + elem + "'.jpg height=180 width=180 /></div>")
    });
  });
}
function getLinks() {
  t.append("<article><h3>Links</h3><div id=links-text></div></article>");
  jQuery.get('updates/links.md', function(data){
    line = data.split("\n");
    $.each(line, function(n, r) {
      if(c.startsWith("{")) var link = c.replace(/\{|\}/g,""); 
      if(c.startsWith("[")) var name  = c.replace(/\[|\]/g,""); 
      $("#links-text").append("<h5><a href='" + link + "' target=_blank title='" + link + "' >" + name + "</a></h5>");
    });
  });
}
function getAbout() {
  var about = "<article><h3>About</h3><img src='img/about' height=180 /><div id=about-text></div><p>"+ aboutOutro +"</p><div id=karly></div></article>";
  t.append(about);
  jQuery.get('updates/about.txt', function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      $("#about-text").append("<p>" + elem + "</p>")
    });
  });
  for (i=0;i<13;i++) {
    for (j=0;j<21;j++) {
      if (k=j%i) $("#karly").append(k);
    }
  }
  $("#karly").append("<img src='img/karly' onClick='wpLoad(Events)' height=99/>");
}
function getSubmit() {
  var thePrompt = window.open("", "", "width=450,height=300,location=0,toolbar=0, resizable=0,scrollbars=0");
  var theHTML = "<head><link rel=stylesheet href='../css/style.css'></style><link rel='shortcut icon' href='../img/favicon'></link><title>Waverly Project Event Form</title></head><body><form><h2>Waverly Project Event Form</h2><h3>Enter password:</h3><input type=password id=karlheinz size=12/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></body>"
  thePrompt.document.documentElement.innerHTML = theHTML;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("karlheinz").value != "stockhausen" )
    {
      alert(location + "\n\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\" Try again.");
    } else {
      alert(location + "\nSucess!\n\n\"I no longer limit myself.\"\n\n Karlheinz Stockhausen");
      thePrompt.resizeTo(w*0.7, h*0.8);
      thePrompt.moveBy(w*0.2, h*0.2);
      thePrompt.document.body.innerHTML("<div style='padding:10%'><iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=" + w*0.7 + " height=" + h*0.8 + " frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe></div>");
    }
  }
}
////////////
//// Begin js load
////////////
$(document).ready(function() {
  if ((w = $(window).width()) >= 600) w = w*0.5;
  h = $(window).height();
  //Place elements
  $("head").append(meta);
  $("body").append([titleData,analytics]);
  makeMenu($("#menu"));
  //Shortcuts
  t = $("#content");
  te = $("#event-load");
});
////////////
//// End js load
////////////