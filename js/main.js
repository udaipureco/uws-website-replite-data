// ================= MENU OPEN =================
function openMenu(){
  document.getElementById("menu").classList.add("active");
  document.body.style.overflow = "hidden";
}

// ================= MENU CLOSE =================
function closeMenu(){
  document.getElementById("menu").classList.remove("active");
  document.body.style.overflow = "auto";
}

// ================= ALL EVENTS =================
document.addEventListener("DOMContentLoaded", function(){

  const menu = document.getElementById("menu");
  const heroBtn = document.getElementById("heroMenuBtn");
  const headerBtn = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-btn");

  // Header menu click
  if(headerBtn){
    headerBtn.addEventListener("click", openMenu);
  }

  // Hero menu click
  if(heroBtn){
    heroBtn.addEventListener("click", openMenu);
  }

  // Close button click
  if(closeBtn){
    closeBtn.addEventListener("click", closeMenu);
  }

  // Outside click close
  if(menu){
    menu.addEventListener("click", function(e){
      if(e.target === menu){
        closeMenu();
      }
    });
  }

});