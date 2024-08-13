var navbar  = document.getElementById("navbar");
var aboutme = document.getElementById("about-me");
const windowHeight  = document.documentElement.clientHeight;


window.onscroll = function(){
    var topWindow     = document.documentElement.scrollTop;
    var position      = topWindow / windowHeight;
    navbar.style.setProperty('opacity', position);

}



function scrollWindow(element){
    var displacement = 0;
    
    if(element == "landing"){
        displacement = 0;
    }else if(element == "aboutme"){
        displacement = windowHeight;
    }else if(element == "projects"){
        displacement = windowHeight * 2;
    }else if(element == "achievements"){
        displacement = windowHeight * 3;
    }

    window.scroll({
        top: displacement,
        behavior: "smooth",
    });

}