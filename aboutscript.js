var wadah = document.querySelectorAll(".wadah")[0];
var header = document.querySelectorAll(".header")[0];
var background = document.querySelectorAll(".background")[0];
var background2 = document.querySelectorAll(".background2")[0];
var footer = document.querySelectorAll(".footer")[0];
var menuhidden = document.querySelectorAll(".menuhidden")[0];
var menuhidden2 = document.querySelectorAll(".menuhidden2")[0];
var wadahmenu = document.querySelectorAll(".wadahmenu")[0];

var menubox = document.querySelectorAll(".menubox")[0];
var geser = document.querySelectorAll(".geser")[0];

function tambahmenu(){
    wadah.classList.add("menubox")
    header.classList.add("geser")
    background.classList.add("geser")
    background2.classList.add("geser")
    footer.classList.add("geser")
    menuhidden.style.display="none"
    menuhidden2.style.visibility="visible"
    wadahmenu.style.display="block"
}

function hapusmenu(){
    wadah.classList.remove("menubox")
    header.classList.remove("geser")
    background.classList.remove("geser")
    background2.classList.remove("geser")
    footer.classList.remove("geser")
    menuhidden.style.display="block"
    menuhidden2.style.visibility="hidden"
    wadahmenu.style.display="none"
}