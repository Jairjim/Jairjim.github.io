var navbar  = document.getElementById("navbar")
var landing = document.getElementById("home")
var aboutme = document.getElementById("about-me")


window.onscroll = function(){
    var topWindow     = document.documentElement.scrollTop;
    var windowHeight  = document.documentElement.clientHeight;
    var position      = topWindow / windowHeight;
    navbar.style.setProperty('opacity', position)

}