////////////
//// Below are some editable variables
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
var meta = "<meta property=og:image content='fdch.github.io/wp/"+logoimage[0]+"'/><meta name=keywords content='"+keywords+"' /><meta name=description content='" + url + "'<meta name=robots content='index, follow' /><meta name=author content='http://githug.io/fdch' /><meta property=fb:app_id content="+fbappid+"/><meta property=og:url content='" + url + "' /><meta property=og:title content='" + title + "' /><meta property=og:site_name content='" + keywords + "'/><title>" + title + " | " + subtitle + "</title>";
var analytics = "<!--Google Analytics--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-61057132-1', 'auto');ga('send', 'pageview');</script><!--End Google Analytics-->"