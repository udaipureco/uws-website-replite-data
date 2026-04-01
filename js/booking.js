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
  window.location.href = "index.html";
}

// ================= NEXT =================
function nextStep(){

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let gmail = document.getElementById("gmail").value;

  if(!name || !mobile || !gmail){
    alert("Please fill all details");
    return;
  }

  if(mobile.length !== 10){
    alert("Enter valid 10 digit mobile number");
    return;
  }

  if(!gmail.includes("@")){
    alert("Enter valid Gmail ID");
    return;
  }

  alert("Booking Successful 🎉");
}

// ================= DATE SYSTEM =================
document.addEventListener("DOMContentLoaded", function(){

  const dateInput = document.getElementById("date");

  let now = new Date();
  let day = now.getDay();

  let dd = String(now.getDate()).padStart(2,'0');
  let mm = String(now.getMonth()+1).padStart(2,'0');
  let yyyy = now.getFullYear();

  // ✅ Show current date
  dateInput.value = `${dd}-${mm}-${yyyy}`;

  // ⚠️ Only info (NO BLOCK)
  if(day === 1){
    console.log("⚠️ Monday Closed");
  }

  let hours = now.getHours();
  let minutes = now.getMinutes();

  if(hours > 16 || (hours === 16 && minutes > 30)){
    console.log("⚠️ Booking time over");
  }

  // ================= INPUT LIVE UPDATE =================
  document.getElementById("adult").addEventListener("input", updateTotal);
  document.getElementById("child").addEventListener("input", updateTotal);

});