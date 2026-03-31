// ================= MENU OPEN =================
function openMenu(){
  const menu = document.getElementById("menu");
  if(menu){
    menu.classList.add("active");
    document.body.style.overflow = "hidden";

    // 🔥 history add
    history.pushState({menu:true}, "");
  }
}

// ================= MENU CLOSE =================
function closeMenu(){
  const menu = document.getElementById("menu");
  if(menu){
    menu.classList.remove("active");
    document.body.style.overflow = "auto";
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
      history.back(); // 🔥 back sync
    });
  }

  // outside click menu close
  if(menu){
    menu.addEventListener("click", function(e){
      if(e.target === menu){
        closeMenu();
        history.back(); // 🔥 sync
      }
    });
  }

  // ================= POPUP EVENTS =================

  // 🔥 OPEN POPUP
  if(viewBtn){
    viewBtn.addEventListener("click", function(){

      if(popup){
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";

        // 🔥 history add
        history.pushState({popup:true}, "");
      }

    });
  }

  // 🔥 CLOSE POPUP BUTTON
  if(closePopup){
    closePopup.addEventListener("click", function(){

      if(popup){
        popup.style.display = "none";
        document.body.style.overflow = "auto";

        history.back(); // 🔥 back sync
      }

    });
  }

  // 🔥 CLICK OUTSIDE CLOSE POPUP
  if(popup){
    popup.addEventListener("click", function(e){

      if(e.target === popup){
        popup.style.display = "none";
        document.body.style.overflow = "auto";

        history.back(); // 🔥 sync
      }

    });
  }

  // ================= 🔥 BACK BUTTON CONTROL =================
  window.addEventListener("popstate", function(){

    // popup open hai to close karo
    if(popup && popup.style.display === "flex"){
      popup.style.display = "none";
      document.body.style.overflow = "auto";
      return;
    }

    // menu open hai to close karo
    if(menu && menu.classList.contains("active")){
      menu.classList.remove("active");
      document.body.style.overflow = "auto";
      return;
    }

  });

});
