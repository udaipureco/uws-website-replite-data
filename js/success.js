document.addEventListener("DOMContentLoaded", function(){

  try {

    let raw = localStorage.getItem("bookingData");

    // ❌ Agar data nahi hai
    if(!raw){
      window.location.replace("entrybook.html");
      return;
    }

    let data = JSON.parse(raw);

    // 🔒 Safety check
    if(!data){
      window.location.replace("entrybook.html");
      return;
    }

    // 👤 USER DETAILS
    document.getElementById("tName").innerText =
      "Name: " + (data.name || "-");

    document.getElementById("tMobile").innerText =
      "Mobile: " + (data.mobile || "-");

    // 🎫 TICKET DETAILS
    document.getElementById("tAdult").innerText =
      "Adult: " + (data.adult || 0);

    document.getElementById("tChild").innerText =
      "Child: " + (data.child || 0);

    document.getElementById("tTotal").innerText =
      "Total Paid: ₹" + (data.total || 0);

    // 📅 DATE TIME
    let now = new Date();
    document.getElementById("tDate").innerText =
      "Date: " + now.toLocaleString();

  } catch (e) {
    console.log("Error:", e);
    window.location.replace("entrybook.html");
  }

});


// 🏠 BACK TO HOME
function goHome(){
  localStorage.removeItem("bookingData"); // 🔥 clear after success
  window.location.replace("index.html");
}