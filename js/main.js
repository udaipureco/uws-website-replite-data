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

// ===== BOATING POPUP =====

let openBtn = document.getElementById("openBoatingPopup");
let popup = document.getElementById("boatingPopup");
let closeBtn = document.getElementById("closeBoating");

if(openBtn){
  openBtn.addEventListener("click", () => {
    popup.classList.add("active");
    document.body.style.overflow = "hidden"; // 🔥 scroll lock
  });
}

if(closeBtn){
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// बाहर क्लिक करने पर बंद
window.addEventListener("click", (e) => {
  if(e.target === popup){
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ===== EV POPUP =====

let evBtn = document.getElementById("openEvPopup");
let evPopup = document.getElementById("evPopup");
let closeEv = document.getElementById("closeEv");

if(evBtn){
  evBtn.addEventListener("click", () => {
    evPopup.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if(closeEv){
  closeEv.addEventListener("click", () => {
    evPopup.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

window.addEventListener("click", (e) => {
  if(e.target === evPopup){
    evPopup.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ================= MAP LINKS =================

// 📍 OPEN MAP (your link)
function openMap(){
  window.open("https://goo.gl/maps/jsEZEF1yoknBL5tH9?g_st=ac", "_blank");
}

// ➤ GET DIRECTIONS (your link)
function getDirections(){
  window.open("https://maps.app.goo.gl/5J92GN5sQwnHfRf46", "_blank");
}

// ================= SCROLL TO LOCATION =================
function scrollToLocation(){
  const section = document.getElementById("location");

  const y = section.getBoundingClientRect().top + window.pageYOffset - 120;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {

    let parent = q.parentElement;

    parent.classList.toggle("active");

  });
});