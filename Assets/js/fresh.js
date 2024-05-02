let mobileNav = document.getElementById("mobile-nav-links");

function openMenu(){
    mobileNav.classList.toggle("sticky");
}

//  Sticky NavBar
let stickyNav = document.getElementById("nav-inner");

function scrolldown(){
  if(window.scrollY >= 0.1 ){
   stickyNav.classList.add("fixed");
  }
  else{
   stickyNav.classList.remove("fixed");
  }
}