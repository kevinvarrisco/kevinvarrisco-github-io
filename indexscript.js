var wadah = document.querySelectorAll(".wadah")[0];
var landingpage = document.querySelectorAll(".landingpage")[0];
var keunggulan1 = document.querySelectorAll(".keunggulan1")[0];
var keunggulan2 = document.querySelectorAll(".keunggulan2")[0];
var banner = document.querySelectorAll(".banner")[0];
var footer = document.querySelectorAll(".footer")[0];
var menuhidden = document.querySelectorAll(".menuhidden")[0];
var menuhidden2 = document.querySelectorAll(".menuhidden2")[0];
var wadahmenu = document.querySelectorAll(".wadahmenu")[0];

var menubox = document.querySelectorAll(".menubox")[0];
var geser = document.querySelectorAll(".geser")[0];

function tambahmenu(){
    wadah.classList.add("menubox")
    landingpage.classList.add("geser")
    keunggulan1.classList.add("geser")
    keunggulan2.classList.add("geser")
    banner.classList.add("geser")
    footer.classList.add("geser")
    menuhidden.style.display="none"
    menuhidden2.style.visibility="visible"
    wadahmenu.style.display="block"
}

function hapusmenu(){
    wadah.classList.remove("menubox")
    landingpage.classList.remove("geser")
    keunggulan1.classList.remove("geser")
    keunggulan2.classList.remove("geser")
    banner.classList.remove("geser")
    footer.classList.remove("geser")
    menuhidden.style.display="block"
    menuhidden2.style.visibility="hidden"
    wadahmenu.style.display="none"
}

var header = document.querySelectorAll(".header")[0];

window.onscroll = function(){
    if(window.pageYOffset >= 100){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}