////////////
//// Below are some editable strings that are too small to put outside.
////////////
var url = "https://waverlyproject.org";
var email = "waverlyproject1@gmail.com";
var facebookUrl = "https://www.facebook.com/waverlyproject/";
var title = "Waverly Project";
var subtitle = "New Music Force by NYU Composers";
var logoimage = ["img/logo", 200, 200];
var menu = ["About", "People", "Events", "Links", "Submit"];
var eventsText = "Below are listed all events (past, present and future) hosted by Waverly Project. We invite you to this menu to navigate through all our seasons, and to click on any event to get more information.";
var aboutOutro = "Please contact us at <a href='mailto:"+email+"'>"+email+"</a> or via our <a href='"+facebookUrl+"' target=_blank>Facebook Page </a>";
var keywords = "waverly, project, music, festival, organization, nyu, nyc, new york university, proyecto, nueva musica, neue musik, contemporary, art, multimedia, ensemble, lectures, masterclasses, concerts, performers, performances, the soon another, talea, iktus percussion, mise-en, angelakis, camara, halac, oliver la rosa";
////////////
//// Meta properties
////////////
var fbappid = 123442671081764;
var meta = "<meta property=og:image content='fdch.github.io/wp/"+logoimage[0]+"'/><meta name=keywords content='"+keywords+"' /><meta name=description content='" + url + "'<meta name=robots content='index, follow' /><meta name=author content='http://githug.io/fdch' /><meta property=fb:app_id content="+fbappid+"/><meta property=og:url content='" + url + "' /><meta property=og:title content='" + title + "' /><meta property=og:site_name content='" + keywords + "'/><title>'" + title + "' | '" + subtitle + "'</title>";
var analytics = "<!--Google Analytics--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-61057132-1', 'auto');ga('send', 'pageview');</script><!--End Google Analytics-->"
////////////
//// From now on, please be extra careful when you edit
////////////
var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=logo><img src='" + logoimage[0] + "' width="+ logoimage[1] +" height="+ logoimage[2] +"/></div><nav id=menu></nav><div id=content></div>";
////////////
//// Begin js load
////////////
$(document).ready(function() {
$("head").append(meta);
$("body")
  .append(titleData)
  .append(analytics);
  
var w = function(){ var w = $(window).width(); if (w >= 600) w = w*0.5;}
var h = function(){$(window).height();}
var m = $("#menu");
var t = $("#content");
var te = $("#event-load");
function wpLoadEvent(x) {te.load("event/" + x);}
function wpLoadId(x) {t.load(x.id);}
function wpLoad(x) {t.load(x)}
for (i = 0; i < menu.lenght; i++) {
  m.append("<span class=menulink onClick=\"get"+menu[i]+"()\">"+menu[i]+"</span>
}
function getEvents() {
  var events = "<article><h3>Events</h3><p>"+ eventsText + "</p><div id=event-menu></div><div id=event-load></div></article>"
  t.append(events);
  $("#event-menu").load("event/menu");
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
function wpEventForm() {
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
});//document.ready