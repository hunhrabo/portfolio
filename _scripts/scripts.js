(function() {
"use strict";


let links = document.getElementById("links"),
    icon = document.getElementById("icon");

let menuToggler = (e) => (e.target.id === "icon" && links.className === "inline") ? menuOpen() : menuClose();

let menuOpen = () => {
    links.className = "block";
    icon.style.color = "#524632";
    window.addEventListener('resize', menuClose, false);
    window.addEventListener('scroll', menuClose, false);
};

let menuClose = () => {
    links.className = "inline";
    icon.style.color = "#F4E9CD"; 
    window.removeEventListener('resize', menuClose, false);
    window.removeEventListener('scroll', menuClose, false);          
};


document.body.addEventListener('click', menuToggler, false);

})();