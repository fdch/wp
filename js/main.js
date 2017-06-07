////////////
//// Please be extra careful when you edit this file
////////////
var w, h, t, te;
var mitem = ["About", "People", "Events", "Links", "Submit"];
var quotes = ["\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\"", "\"I no longer limit myself.\""];
var promptHTML = "<head><link rel=stylesheet href='../css/style.css'></style><link rel='shortcut icon' href='../img/favicon'></link><title>Waverly Project Event Form</title></head><body><h2>Waverly Project Event Form</h2><div><form><h3>Enter password:</h3><input type=password id=krl size=12/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></div></body>";
var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=logo><img src='" + logoimage[0] + "' width="+ logoimage[1] +" height="+ logoimage[2] +"/></div><div id=menu></div><div id=content></div>";
var events = "<article><h3>Events</h3><p>"+ eventsText + "</p><div id=event-menu></div><div id=event-load></div></article>";
var about = "<article><h3>About</h3><img src='img/about' height=180 /><div id=about-text></div><p>"+ aboutOutro +"</p><div id=karly></div></article>";
var people = "<article><h3>People</h3><div id=people-list></div></article>";
var links = "<article><h3>Links</h3><div id=links-text></div></article>";
var gform = "<div style='padding:10%'><iframe src='https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=true' width=500 height=600 frameborder=0 marginheight=0 marginwidth=0>Loading...</iframe></div>";
var options = "width=450,height=300,location=0,toolbar=0,resizable=0,scrollbars=0";

////////////
function wpLoadEvent(x, y) {te.load("event/" + x);}
////////////
//// Menu functions
////////////
function makeMenu(m, len) {
  var i,j;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<span class=menuitem onClick=\"get" + mitem[i] + "()\">  " + mitem[i] + "  </span>");
  }
  m.append("</nav>");
}
function getEvents() {
  t.load(events);
  te.load("event/menu");
}
function getPeople() {
  t.load(people);
  jQuery.get('updates/people-list', function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      $("#people-list")
      .append("<div id=" + elem + " onClick=wpLoadId(this)><h4>" + elem + "</h4><img src='img/people/" + elem + "'.jpg height=180 width=180 /></div>")
    });
  });
}
function getLinks() {
  t.load(links);
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
  t.load(about);
  jQuery.get('updates/about.txt', function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      $("#about-text").append("<p>" + elem + "</p>")
    });
  });
  for (i=0;i<13;i++) {
    $("#karly").append("<p>");
    for (j=0;j<21;j++) {
      if (k=j%i) $("#karly").append(k+" ");
    }
    $("#karly").append("</p>");
  }
  $("#karly").append("<img src='img/karly' onClick='wpLoad(Events)' height=99/>");
}
function getSubmit() {
  var thePrompt = window.open("", "", options);
  thePrompt.document.documentElement.innerHTML = promptHTML;
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("krl").value != "stockhausen" )
    {
      alert("\n"+quotes[0]+"\n\n Try again.");
    } else {
      alert("\nSucess!\n\n"+quotes[1]+"\n\n K. S.");
      thePrompt.document.getElementByTag("div").load(gform);
      thePrompt.resizeTo(w*0.7, h*0.8);
      thePrompt.moveBy(w*0.2, h*0.2);
    }
  }
}
////////////
//// Begin js load
////////////
$(document).ready(function(x) {
  if ((w = $(window).width()) >= 600) w = w*0.5;
  h = $(window).height();
  //Place elements
  $("head").append(meta);
  $("body").append([titleData,analytics]);
  makeMenu($("#menu"), mitem.length);
  //Shortcuts
  t = $("#content");
  te = $("#event-load");
});
////////////
//// End js load
////////////