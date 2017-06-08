////////////
//// Please be extra careful when you edit this file
////////////
var w, h, t, te;

var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=logo><img src='" + logoimage[0] + "' width="+ logoimage[1] +" height="+ logoimage[2] +"/></div><div id=menu></div><div id=content></div>";

var mitem = ["About", "People", "Events", "Links", "Submit"];
var about = "<article><h3>About</h3><img src='img/about' height=180 /><div id=about-text></div><p>"+ aboutOutro +"</p><div id=karly></div></article>";
var people = "<article><h3>People</h3><div id=people-list></div></article>";
var events = "<article><h3>Events</h3><p>"+ eventsText + "</p><div id=event-menu></div><div id=event-load></div></article>";
var links = "<article><h3>Links</h3><div id=links-text></div></article>";
var submit = ["\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\"", "\"I no longer limit myself.\"", "<head><link rel=stylesheet href='../css/style.css'></style><link rel='shortcut icon' href='../img/favicon'></link><title>Waverly Project Event Form</title></head><body><h2>Waverly Project Event Form</h2><div id=maindiv><form><h3>Enter password:</h3><input type=password id=krl size=12/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></div></body>","https://docs.google.com/forms/d/e/1FAIpQLSdWV-2zEgbjF6WDroZrZx-bAqoXG8Tx3v_0XwA1dwhJIBafUA/viewform?embedded=false", "stockhausen", "width=450, height=300, location=0, toolbar=0, resizable=0, scrollbars=0"];
var eventMenu = ["Season_2016_2017", "Season_2015_2016", "Season_2014_2015"];
var season20162017 = "event/"+eventMenu[0].toLowerCase();
var season20152016 = "event/"+eventMenu[1].toLowerCase();
var season20142015 = "event/"+eventMenu[2].toLowerCase();
////////////
function replaceContent(x,y) {document.getElementById(y).innerHTML = x;}
////////////
//// Menu functions
////////////
function makeMenu(m, len, mitem, type) {
  var i,j;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<"+type+" class=menuitem onClick=\"get" + mitem[i].substring(0,6) + "(" + mitem[i].toLowerCase().replace(/_/g,"") + ")\">  " + mitem[i].replace(/_/g," ") + "  </"+type+">");
  }
  m.append("</nav>");
}
function getEvents(x) {
  replaceContent(x,'content');
  makeMenu($("#event-menu"), eventMenu.length, eventMenu, "button");
}
function getSeason(x){
  $("#event-load").load(x);
};
function getPeople(x) {
  replaceContent(x, 'content');
  jQuery.get('updates/people-list', function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      $("#people-list")
      .append("<div id=" + elem + " onClick=alert(this)><h4>" + elem + "</h4><img src='img/people/" + elem + "'.jpg height=180 width=180 /></div>")
    });
  });
}
function getLinks(x) {
  replaceContent(x,'content');
  jQuery.get('updates/links.md', function(data){
    line = data.split("\n");
    $.each(line, function(n, c) {
      if(c.startsWith("{")) var link = c.replace(/\{|\}/g,""); 
      if(c.startsWith("[")) var name  = c.replace(/\[|\]/g,""); 
      $("#links-text").append("<h5><a href='" + link + "' target=_blank title='" + link + "' >" + name + "</a></h5>");
    });
  });
}
function getAbout(x) {
  replaceContent(x,'content');
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
  $("#karly").append("<img src='img/karly' onClick='getEvents(events)' height=99/>");
}
function getSubmit(x) {
  var thePrompt = window.open("", "WPEventForm", x[5]);
  thePrompt.document.documentElement.innerHTML = x[2];
  thePrompt.document.getElementById("authOK").onclick = function () {
    if ( thePrompt.document.getElementById("krl").value != x[4] )
    {
      alert("\n"+x[0]+"\n\n Try again.");
    } else {
      alert("\nSucess!\n\n"+x[1]+"\n\n K. S.");
      thePrompt.resizeTo(w, h);
      thePrompt.moveBy(w*0.5, h*0.1);
      open(x[3], "WPEventForm");
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
  makeMenu($("#menu"), mitem.length, mitem, "span");
});
////////////
//// End js load
////////////