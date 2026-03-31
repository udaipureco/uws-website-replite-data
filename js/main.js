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

  // ===== MENU ELEMENTS =====
  const menu = document.getElementById("menu");
  const heroBtn = document.getElementById("heroMenuBtn");
  const headerBtn = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-btn");

  // ===== POPUP ELEMENTS =====
  const viewBtn = document.getElementById("viewBtn");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // ================= MENU EVENTS =================

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

  // Outside click close (menu)
  if(menu){
    menu.addEventListener("click", function(e){
      if(e.target === menu){
        closeMenu();
      }
    });
  }

  // ================= POPUP EVENTS =================

  // OPEN POPUP
  if(viewBtn){
    viewBtn.addEventListener("click", function(){
      if(popup){
        popup.style.display = "flex";
      }
    });
  }

  // CLOSE POPUP BUTTON
  if(closePopup){
    closePopup.addEventListener("click", function(){
      if(popup){
        popup.style.display = "none";
      }
    });
  }

  // CLICK OUTSIDE CLOSE POPUP
  if(popup){
    popup.addEventListener("click", function(e){
      if(e.target === popup){
        popup.style.display = "none";
      }
    });
  }

});