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


if(menu){
  menu.addEventListener("click", (e) => {

    if(e.target === menu){
      closeMenu();
    }else{
      e.stopPropagation(); // 🔥 MAIN FIX
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


  // ================= BACK BUTTON =================

  window.addEventListener("popstate", () => {

    if(entryPopup && entryPopup.style.display === "flex"){
      entryPopup.style.display = "none";
      document.body.style.overflow = "auto";
      return;
    }

    if(isMenuOpen){
      closeMenu(true); // 🔥 important (no history loop)
      return;
    }

  });

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
  const prices = {
    adult: 10,
    child: 5,
    motor: 100,
    shikara: 100,
    paddle: 50,
    ev: 20
  };

  // COUNT STORAGE
  const counts = {
    adult: 0,
    child: 0,
    motor: 0,
    shikara: 0,
    paddle: 0,
    ev: 0
  };

  // UPDATE UI FUNCTION
  function updateUI(){

    // update count
    document.getElementById("adultCount").innerText = counts.adult;
    document.getElementById("childCount").innerText = counts.child;
    document.getElementById("motorCount").innerText = counts.motor;
    document.getElementById("shikaraCount").innerText = counts.shikara;
    document.getElementById("paddleCount").innerText = counts.paddle;
    document.getElementById("evCountAll").innerText = counts.ev;

    // calculate total
    let total = 0;

    for(let key in counts){
      total += counts[key] * prices[key];
    }

    // update total
    document.getElementById("grandTotal").innerText = total;
  }

  // ➕ PLUS BUTTON
  document.querySelectorAll(".plus").forEach(btn => {
    btn.addEventListener("click", function(){
      let type = this.getAttribute("data-type");
      counts[type]++;
      updateUI();
    });
  });

  // ➖ MINUS BUTTON
  document.querySelectorAll(".minus").forEach(btn => {
    btn.addEventListener("click", function(){
      let type = this.getAttribute("data-type");

      if(counts[type] > 0){
        counts[type]--;
        updateUI();
      }
    });
  });

  // FIRST LOAD
  updateUI();

});

// ================= FAQ TOGGLE =================

document.addEventListener("DOMContentLoaded", function(){

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", function(){

      const isOpen = item.classList.contains("active");

      // 🔥 close all
      faqItems.forEach(i => {
        i.classList.remove("active");

        const ans = i.querySelector(".faq-answer");
        const icn = i.querySelector(".faq-icon");

        if(ans){
          ans.style.maxHeight = null;
        }
        if(icn){
          icn.innerText = "+";
        }
      });

      // 🔥 open clicked
      if(!isOpen){
        item.classList.add("active");

        if(answer){
          answer.style.maxHeight = answer.scrollHeight + "px";
        }

        if(icon){
          icon.innerText = "−";
        }
      }

    });

  });

});