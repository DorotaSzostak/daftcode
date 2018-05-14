var hamburgerBtn = document.getElementById("hamburger");
var iksBtn = document.getElementById("iks");
var menu = document.querySelector(".header__nav");
var socialIcons = document.querySelector(".header__nav--mobile")


hamburgerBtn.addEventListener('click', function(){
    menu.classList.add('header__nav--active')
    openNav()  
});

iksBtn.addEventListener('click', function (){
    menu.classList.remove('header__nav--active')
    closeNav() 
})

function openNav (){
    hamburgerBtn.style.display = "none";
    iksBtn.style.display = "block";
    socialIcons.style.display = "flex"
}

function closeNav(){
    hamburgerBtn.style.display = "block";
    iksBtn.style.display = "none";
    socialIcons.style.display = "none"
}