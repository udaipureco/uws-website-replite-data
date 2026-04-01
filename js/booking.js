// ================= PRICE =================
let prices = {
  adult: 10,
  child: 5
};

// ================= QTY (BUTTON CLICK) =================
function changeQty(type, value){
  let el = document.getElementById(type);

  let count = parseInt(el.value) || 0;

  count += value;
  if(count < 0) count = 0;

  el.value = count;

  updateTotal();
}

// ================= TOTAL =================
function updateTotal(){

  let adult = parseInt(document.getElementById("adult").value) || 0;
  let child = parseInt(document.getElementById("child").value) || 0;

  let total = (adult * prices.adult) + (child * prices.child);

  let summaryHTML = "";

  if(adult > 0){
    summaryHTML += `
      <div>
        <span>Adult (${adult})</span>
        <span>₹${adult * prices.adult}</span>
      </div>
    `;
  }

  if(child > 0){
    summaryHTML += `
      <div>
        <span>Child (${child})</span>
        <span>₹${child * prices.child}</span>
      </div>
    `;
  }

  if(summaryHTML === ""){
    summaryHTML = "<div>No tickets selected</div>";
  }

  document.getElementById("summary").innerHTML = summaryHTML;
  document.querySelector(".final-total").innerText = "TOTAL ₹" + total;
}

// ================= NAVIGATION =================
function goHome(){
  localStorage.removeItem("bookingData"); // 🔥 fresh start
  window.location.href = "index.html";
}

// ================= NEXT =================
function nextStep(){

  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let gmail = document.getElementById("gmail").value.trim();

  let adult = parseInt(document.getElementById("adult").value) || 0;
  let child = parseInt(document.getElementById("child").value) || 0;

  let total = (adult * 10) + (child * 5);

  // ❌ validation
  if(adult === 0 && child === 0){
    alert("Select at least 1 ticket");
    return;
  }

  if(!name || !mobile || !gmail){
    alert("Please fill all details");
    return;
  }

  if(mobile.length !== 10){
    alert("Enter valid mobile number");
    return;
  }

  if(!gmail.includes("@")){
    alert("Enter valid Gmail");
    return;
  }

  // ✅ JSON DATA
  let bookingData = {
    name,
    mobile,
    gmail,
    adult,
    child,
    total
  };

  // 💾 SAVE
  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  // 🔥 FLAG (Back ke liye)
  sessionStorage.setItem("fromPreview", "true");

  // 🚀 REDIRECT
  window.location.href = "preview.html";
}

// ================= DATE SYSTEM + INIT =================
document.addEventListener("DOMContentLoaded", function(){

  // 🔥 NEW VISIT vs BACK FIX
  let fromPreview = sessionStorage.getItem("fromPreview");

  if(!fromPreview){
    localStorage.removeItem("bookingData"); // fresh visit
  }

  // use ke baad remove
  sessionStorage.removeItem("fromPreview");


  // ================= DATE =================
  const dateInput = document.getElementById("date");

  if(dateInput){
    let now = new Date();
    let day = now.getDay();

    let dd = String(now.getDate()).padStart(2,'0');
    let mm = String(now.getMonth()+1).padStart(2,'0');
    let yyyy = now.getFullYear();

    dateInput.value = `${dd}-${mm}-${yyyy}`;

    if(day === 1){
      console.log("⚠️ Monday Closed");
    }

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if(hours > 16 || (hours === 16 && minutes > 30)){
      console.log("⚠️ Booking time over");
    }
  }

  // ================= INPUT EVENTS =================
  let adultInput = document.getElementById("adult");
  let childInput = document.getElementById("child");

  if(adultInput && childInput){
    adultInput.addEventListener("input", updateTotal);
    childInput.addEventListener("input", updateTotal);
  }

  // ================= AUTO FILL =================
  let data = JSON.parse(localStorage.getItem("bookingData"));

  if(data){
    if(document.getElementById("name")){
      document.getElementById("name").value = data.name || "";
    }

    if(document.getElementById("mobile")){
      document.getElementById("mobile").value = data.mobile || "";
    }

    if(document.getElementById("gmail")){
      document.getElementById("gmail").value = data.gmail || "";
    }

    if(document.getElementById("adult")){
      document.getElementById("adult").value = data.adult || 0;
    }

    if(document.getElementById("child")){
      document.getElementById("child").value = data.child || 0;
    }
  }

  // 🔥 ALWAYS update UI
  updateTotal();
});