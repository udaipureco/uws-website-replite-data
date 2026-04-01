document.addEventListener("DOMContentLoaded", function(){

  let data = JSON.parse(localStorage.getItem("bookingData"));

  // ❌ no data
  if(!data){
    alert("No booking data found");
    window.location.href = "entrybook.html";
    return;
  }

  // 🎫 Ticket details
  let ticketHTML = "";

  if(data.adult > 0){
    ticketHTML += `
      <div>
        <span>Adult (${data.adult})</span>
        <span>₹${data.adult * 10}</span>
      </div>
    `;
  }

  if(data.child > 0){
    ticketHTML += `
      <div>
        <span>Child (${data.child})</span>
        <span>₹${data.child * 5}</span>
      </div>
    `;
  }

  document.getElementById("ticketDetails").innerHTML = ticketHTML;

  // 💰 Total
  document.getElementById("totalAmount").innerText = "TOTAL ₹" + data.total;

  // 👤 User
  document.getElementById("name").innerText = "Name: " + data.name;
  document.getElementById("mobile").innerText = "Mobile: " + data.mobile;
  document.getElementById("gmail").innerText = "Gmail: " + data.gmail;

});

// 🔙 Back
function goBack(){
  window.location.href = "entrybook.html"; // 🔥 correct page name
}

// 💳 Payment
function confirmBooking(){

  let check = document.getElementById("terms");

  if(!check.checked){
    alert("Please accept Terms & Conditions");
    return;
  }

  alert("Payment System Coming Soon 🚀");

  // optional clear

  window.location.href = "index.html";
}