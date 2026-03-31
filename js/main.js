// ================= MENU OPEN =================
function openMenu(){
  const menu = document.getElementById("menu");

  if(menu){
    menu.classList.add("active");
    document.body.classList.add("menu-open");

    // history add (duplicate avoid)
    if(!menu.classList.contains("history-added")){
      history.pushState({menu:true}, "");
      menu.classList.add("history-added");
    }
  }
}

// ================= MENU CLOSE =================
function closeMenu(){
  const menu = document.getElementById("menu");

  if(menu){
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
    menu.classList.remove("history-added");
  }
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

  if(headerBtn){
    headerBtn.addEventListener("click", openMenu);
  }

  if(heroBtn){
    heroBtn.addEventListener("click", openMenu);
  }

  if(closeBtn){
    closeBtn.addEventListener("click", function(){
      closeMenu();
      history.back(); // sync back
    });
  }

  // outside click close (menu)
  if(menu){
    menu.addEventListener("click", function(e){
      if(e.target === menu){
        closeMenu();
        history.back();
      }
    });
  }

  // ================= POPUP EVENTS =================

  // OPEN POPUP
  if(viewBtn){
    viewBtn.addEventListener("click", function(){

      if(popup){
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";

        history.pushState({popup:true}, "");
      }

    });
  }

  // CLOSE POPUP BUTTON
  if(closePopup){
    closePopup.addEventListener("click", function(){

      if(popup){
        popup.style.display = "none";
        document.body.style.overflow = "auto";

        history.back();
      }

    });
  }

  // CLICK OUTSIDE CLOSE POPUP
  if(popup){
    popup.addEventListener("click", function(e){

      if(e.target === popup){
        popup.style.display = "none";
        document.body.style.overflow = "auto";

        history.back();
      }

    });
  }

  // ================= BACK BUTTON CONTROL =================
  window.addEventListener("popstate", function(){

    // popup open hai → close karo
    if(popup && popup.style.display === "flex"){
      popup.style.display = "none";
      document.body.style.overflow = "auto";
      return;
    }

    // menu open hai → close karo
    if(menu && menu.classList.contains("active")){
      closeMenu();
      return;
    }

  });

});