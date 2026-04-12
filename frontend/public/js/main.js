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

    history.pushState({menu:true}, "");
  }
}

function closeMenu(skipHistory = false){
  const menu = document.getElementById("menu");

  if(menu && isMenuOpen){
    menu.classList.remove("active");
    document.body.style.overflow = "auto";

    isMenuOpen = false;

    if(!skipHistory && history.state && history.state.menu){
      history.back();
    }
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


// ================= MAIN INIT (Event Delegation) =================

document.addEventListener("click", function(e){

  // MENU OPEN — hero menu btn or header hamburger
  if(e.target.closest("#heroMenuBtn") || e.target.closest(".menu-icon") || e.target.closest("[data-testid='header-menu-btn']")){
    openMenu();
    return;
  }

  // MENU CLOSE — close button
  if(e.target.closest(".close-btn")){
    closeMenu();
    return;
  }

  // MENU OVERLAY — click outside panel to close
  var menuOverlay = document.getElementById("menu");
  if(menuOverlay && e.target === menuOverlay){
    closeMenu();
    return;
  }

  // ENTRY POPUP OPEN
  if(e.target.closest("#viewBtn")){
    var entryPopup = document.getElementById("popup");
    if(entryPopup){
      entryPopup.style.display = "flex";
      document.body.style.overflow = "hidden";
      history.pushState({popup:true}, "");
    }
    return;
  }

  // ENTRY POPUP CLOSE
  if(e.target.closest("#closePopup")){
    var entryPopup = document.getElementById("popup");
    if(entryPopup){
      entryPopup.style.display = "none";
      document.body.style.overflow = "auto";
      history.back();
    }
    return;
  }

  // ENTRY POPUP BACKDROP
  var entryPopup = document.getElementById("popup");
  if(entryPopup && e.target === entryPopup){
    entryPopup.style.display = "none";
    document.body.style.overflow = "auto";
    history.back();
    return;
  }

  // FAQ TOGGLE
  var faqQuestion = e.target.closest(".faq-question");
  if(faqQuestion){
    var faqItem = faqQuestion.closest(".faq-item");
    if(faqItem){
      var isOpen = faqItem.classList.contains("active");
      // Close all FAQ items
      document.querySelectorAll(".faq-item").forEach(function(item){
        item.classList.remove("active");
        var ans = item.querySelector(".faq-answer");
        if(ans) ans.style.maxHeight = null;
        var icn = item.querySelector(".faq-question span");
        if(icn) icn.innerText = "+";
      });
      // Open clicked if it was closed
      if(!isOpen){
        faqItem.classList.add("active");
        var answer = faqItem.querySelector(".faq-answer");
        if(answer) answer.style.maxHeight = answer.scrollHeight + "px";
        var icon = faqItem.querySelector(".faq-question span");
        if(icon) icon.innerText = "\u2212";
      }
    }
    return;
  }
});

// ================= BACK BUTTON =================
window.addEventListener("popstate", function(){
  var entryPopup = document.getElementById("popup");
  if(entryPopup && entryPopup.style.display === "flex"){
    entryPopup.style.display = "none";
    document.body.style.overflow = "auto";
    return;
  }

  if(isMenuOpen){
    closeMenu(true);
    return;
  }
});


// ================= COMMON SCROLL FUNCTION =================

function scrollToSection(id){

  const section = document.getElementById(id);

  closeMenu();

  setTimeout(() => {

    if(section){
      const header = document.querySelector(".header");
      const offset = header ? header.offsetHeight + 20 : 120;

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
  e.stopPropagation(); // 🔥 FIX
  scrollToSection("boating");
});

document.getElementById("menuLocationBtn")?.addEventListener("click", (e) => {
  e.stopPropagation(); // 🔥 FIX
  scrollToSection("location");
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

// ================= MENU EV SCROLL =================
document.getElementById("menuEvBtn")?.addEventListener("click", () => {
  scrollToSection("ev");
});

// ================= MENU BICYCLE REDIRECT =================
document.getElementById("menuCycleBtn")?.addEventListener("click", () => {

  // menu close
  closeMenu();

  // scroll unlock
  document.body.style.overflow = "auto";

  // redirect
  setTimeout(() => {
    window.location.href = "pages/bicycle/rent.html";
  }, 200);

});

// ================= MENU ATTRACTIONS SCROLL (FINAL PERFECT VIEW) =================
const attractionBtn = document.getElementById("menuAttractionBtn");

if(attractionBtn){
  attractionBtn.addEventListener("click", () => {

    const section = document.getElementById("attractions");

    // menu close
    closeMenu();
    document.body.style.overflow = "auto";

    // history fix
    if(history.state?.menu){
  history.back();
}

    setTimeout(() => {
      if(section){

        // 🔥 EXTRA OFFSET (MAIN FIX)
        const extraOffset = 240; // 👈 isko adjust kar sakte ho (140–180 best)

        const y = section.getBoundingClientRect().top + window.pageYOffset - extraOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });

      }
    }, 300);

  });
}

// ================= MENU ECO STAY REDIRECT =================
const ecoBtn = document.getElementById("menuEcoBtn");

if(ecoBtn){
  ecoBtn.addEventListener("click", () => {

    // menu close
    closeMenu();
    document.body.style.overflow = "auto";

    // history fix
    if(history.state?.menu){
  history.back();
}

    // smooth redirect delay
    setTimeout(() => {
      window.location.href = "pages/ecohut/ecohut.html";
    }, 300);

  });
}

// ================= MENU BOOKING SCROLL =================
const bookingBtn = document.getElementById("menuBookingBtn");

if(bookingBtn){
  bookingBtn.addEventListener("click", () => {

    const section = document.getElementById("booking");

    // menu close
    closeMenu();
    document.body.style.overflow = "auto";

    // history fix
    if(history.state?.menu){
  history.back();
}

    setTimeout(() => {
      if(section){

        // 🔥 OFFSET (perfect view)
        const offset = 90;

        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

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
  rulesBtn.addEventListener("click", () => {

    const section = document.getElementById("rules");

    // menu close
    closeMenu();
    document.body.style.overflow = "auto";

    // history fix
    if(history.state?.menu){
  history.back();
}

    setTimeout(() => {
      if(section){

        // 🔥 same offset (perfect alignment)
        const offset = 70;

        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });

      }
    }, 300);

  });
}

// ================= EV CART SYSTEM =================

(function(){

  let count = 1;
  const price = 20;

  const minusBtn = document.getElementById("evMinus");
  const plusBtn = document.getElementById("evPlus");
  const countText = document.getElementById("evCount");
  const totalText = document.getElementById("evTotal");

  function updateUI(){
    countText.innerText = count;
    totalText.innerText = count * price;
  }

  // ➖ Minus Button
  if(minusBtn){
    minusBtn.addEventListener("click", () => {
      if(count > 1){
        count--;
        updateUI();
      }
    });
  }

  // ➕ Plus Button
  if(plusBtn){
    plusBtn.addEventListener("click", () => {
      count++;
      updateUI();
    });
  }

  // 🔥 Initial Update
  updateUI();

})();

// ================= ALL BOOKING SYSTEM =================

document.addEventListener("DOMContentLoaded", function(){

  // PRICE LIST
  // Legacy booking system removed (IDs not in use)
  // All-in-one booking handled by the system below
});

// ================= FAQ TOGGLE (handled via event delegation above) =================

function scrollToLocation(){

  const section = document.getElementById("location");

  if(section){

    const header = document.querySelector(".header");

    const offset = header ? header.offsetHeight + 20 : 120;

    const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });

  }

}


  //===== all in one boking =====
document.addEventListener("DOMContentLoaded", function(){

  // ================= PRICE LIST =================
  const prices = [10, 5, 100, 100, 50, 20];

  const items = document.querySelectorAll(".booking-item");
  const totalBox = document.querySelector(".booking-total");

  // ================= STATE =================
  let counts = [0, 0, 0, 0, 0, 0];

  // ================= UPDATE UI =================
  function updateUI(){

    let total = 0;

    items.forEach((item, index) => {

      const countSpan = item.querySelector(".booking-qty span");
      countSpan.innerText = counts[index];

      total += counts[index] * prices[index];

    });

    totalBox.innerText = "TOTAL: ₹" + total;
  }

  // ================= BUTTON LOGIC =================
  items.forEach((item, index) => {

    const minus = item.querySelector(".booking-qty button:first-child");
    const plus = item.querySelector(".booking-qty button:last-child");

    minus.addEventListener("click", () => {
      if(counts[index] > 0){
        counts[index]--;
        updateUI();
      }
    });

    plus.addEventListener("click", () => {
      counts[index]++;
      updateUI();
    });

  });

  // ================= VIEW DETAILS =================
  document.querySelector(".booking-btn")?.addEventListener("click", () => {

    alert("Total Booking: ₹" + totalBox.innerText.replace("TOTAL: ₹",""));

  });

  // ================= BOOK NOW =================
  document.querySelectorAll(".booking-btn")[1]?.addEventListener("click", () => {

    const data = {
      counts: counts,
      total: totalBox.innerText.replace("TOTAL: ₹","")
    };

    localStorage.setItem("allBookingData", JSON.stringify(data));

    window.location.href = "pages/allbooking/preview.html";

  });

  // ================= INIT =================
  updateUI();

});

function initMenu(){

  const heroMenuBtn = document.getElementById("heroMenuBtn");
  const headerMenuBtn = document.querySelector(".header .menu");
  const closeMenuBtn = document.querySelector(".close-btn");

  // OPEN
  heroMenuBtn && heroMenuBtn.addEventListener("click", openMenu);
  headerMenuBtn && headerMenuBtn.addEventListener("click", openMenu);

  // CLOSE
  closeMenuBtn && closeMenuBtn.addEventListener("click", () => {
    closeMenu();
  });
}