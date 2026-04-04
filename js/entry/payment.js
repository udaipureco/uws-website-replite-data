document.addEventListener("DOMContentLoaded", function(){

  let data = JSON.parse(localStorage.getItem("bookingData"));

  if(!data){
    alert("No booking found");
    window.location.href = "entrybook.html";
    return;
  }

  document.getElementById("amount").innerText = "₹" + data.total;

});


// 💳 PAYMENT
function payNow(){

  let btn = document.getElementById("payBtn");
  let loading = document.getElementById("loading");

  btn.style.display = "none";
  loading.style.display = "block";

  // ⏳ fake processing
  setTimeout(() => {
    window.location.href = "success.html";
  }, 2500);

}