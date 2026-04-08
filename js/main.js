// ================= GLOBAL SETTINGS =================
history.scrollRestoration = "manual";


// ================= MENU STATE CONTROL =================
let isMenuOpen = false;


// ================= MENU FUNCTIONS =================

function openMenu(){
  const menu = document.getElementById("menu");

  if(menu && !isMenuOpen){
    menu.classList.add("active");
    document.body.style.overflow = "hidden";

    isMenuOpen = true;
  }
}

function closeMenu(){
  const menu = document.getElementById("menu");

  if(menu && isMenuOpen){
    menu.classList.remove("active");
    document.body.style.overflow = "auto";

    isMenuOpen = false;
  }
}


// ================= HOME BUTTON =================

function goHome(){
  closeMenu();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ================= MAIN INIT =================

document.addEventListener("DOMContentLoaded", function(){

  const menu = document.getElementById("menu");
  const heroMenuBtn = document.getElementById("heroMenuBtn");
  const headerMenuBtn = document.querySelector(".menu");
  const closeMenuBtn = document.querySelector(".close-btn");

  const entryPopup = document.getElementById("popup");
  const openEntryBtn = document.getElementById("viewBtn");
  const closeEntryBtn = document.getElementById("closePopup");


  // ===== MENU OPEN =====
  heroMenuBtn && heroMenuBtn.addEventListener("click", openMenu);
  headerMenuBtn && headerMenuBtn.addEventListener("click", openMenu);


  // ===== MENU CLOSE BUTTON =====
  if(closeMenuBtn){
    closeMenuBtn.addEventListener("click", () => {
      closeMenu();
    });
  }


  // ===== OUTSIDE CLICK CLOSE =====
  if(menu){
    menu.addEventListener("click", (e) => {
      if(e.target === menu){
        closeMenu();
      }
    });
  }


  // ================= ENTRY POPUP =================

  if(openEntryBtn){
    openEntryBtn.addEventListener("click", () => {
      entryPopup.style.display = "flex";
      document.body.style.overflow = "hidden";

      history.pushState({popup:true}, "");
    });
  }

  if(closeEntryBtn){
    closeEntryBtn.addEventListener("click", () => {
      entryPopup.style.display = "none";
      document.body.style.overflow = "auto";

      history.back();
    });
  }

  if(entryPopup){
    entryPopup.addEventListener("click", (e) => {
      if(e.target === entryPopup){
        entryPopup.style.display = "none";
        document.body.style.overflow = "auto";
        history.back();
      }
    });
  }

  // ================= COMMON SCROLL FUNCTION =================
  function scrollToSection(id){

    const section = document.getElementById(id);

    closeMenu();

    setTimeout(() => {

      if(section){
        const header = document.querySelector(".header");
        const offset = header ? header.offsetHeight + 40 : 140; // 🔥 FIXED OFFSET

        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }

    }, 300);
  }


  // ================= MENU SCROLL BUTTONS =================

  document.getElementById("menuGalleryBtn")?.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔥 FIX
    scrollToSection("gallery");
  });

  document.getElementById("menuBoatingBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    scrollToSection("boating");
  });

  document.getElementById("menuLocationBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    scrollToSection("location");
  });


  // ================= MENU EV SCROLL =================
  document.getElementById("menuEvBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    scrollToSection("ev");
  });


  // ================= MENU BOOKING SCROLL =================
  const bookingBtn = document.getElementById("menuBookingBtn");

  if(bookingBtn){
    bookingBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      const section = document.getElementById("booking");

      closeMenu();
      document.body.style.overflow = "auto";

      setTimeout(() => {
        if(section){
          const y = section.getBoundingClientRect().top + window.pageYOffset - 100;

          window.scrollTo({
            top: y,
            behavior: "smooth"
          });
        }
      }, 300);
    });
  }


  // ================= MENU RULES SCROLL =================
  const rulesBtn = document.getElementById("menuRulesBtn");

  if(rulesBtn){
    rulesBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      const section = document.getElementById("rules");

      closeMenu();

      setTimeout(() => {
        if(section){
          const y = section.getBoundingClientRect().top + window.pageYOffset - 90;

          window.scrollTo({
            top: y,
            behavior: "smooth"
          });
        }
      }, 300);
    });
  }

});


// ================= MAP FUNCTIONS =================

function openMap(){
  window.open("https://goo.gl/maps/jsEZEF1yoknBL5tH9?g_st=ac", "_blank");
}

function getDirections(){
  window.open("https://maps.app.goo.gl/5J92GN5sQwnHfRf46", "_blank");
}


// ================= BOATING POPUP =================

(function(){

  const popup = document.getElementById("boatingPopup");

  document.getElementById("openBoatingPopup")?.addEventListener("click", () => {
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  document.getElementById("closeBoating")?.addEventListener("click", () => {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (e) => {
    if(e.target === popup){
      popup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

})();


// ================= EV POPUP =================

(function(){

  const popup = document.getElementById("evPopup");

  document.getElementById("openEvPopup")?.addEventListener("click", () => {
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  document.getElementById("closeEv")?.addEventListener("click", () => {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (e) => {
    if(e.target === popup){
      popup.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

})();


// ================= MENU BICYCLE REDIRECT =================
document.getElementById("menuCycleBtn")?.addEventListener("click", (e) => {

  e.stopPropagation(); // 🔥 FIX

  closeMenu();
  document.body.style.overflow = "auto";

  setTimeout(() => {
    window.location.href = "pages/bicycle/rent.html";
  }, 200);

});


// ================= MENU ECO STAY REDIRECT =================
const ecoBtn = document.getElementById("menuEcoBtn");

if(ecoBtn){
  ecoBtn.addEventListener("click", (e) => {

    e.stopPropagation(); // 🔥 FIX

    closeMenu();
    document.body.style.overflow = "auto";

    setTimeout(() => {
      window.location.href = "pages/ecohut/ecohut.html";
    }, 300);

  });
}