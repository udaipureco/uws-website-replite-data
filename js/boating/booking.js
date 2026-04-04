let prices = {
motor: 100,
shikara: 100,
paddle: 50
};

function changeQty(type, value){
let el = document.getElementById(type);
let count = parseInt(el.value) || 0;

count += value;
if(count < 0) count = 0;

el.value = count;

updateTotal();
}

function updateTotal(){
let motor = parseInt(document.getElementById("motor").value) || 0;
let shikara = parseInt(document.getElementById("shikara").value) || 0;
let paddle = parseInt(document.getElementById("paddle").value) || 0;

let total =
(motor * prices.motor) +
(shikara * prices.shikara) +
(paddle * prices.paddle);

let html = "";

if(motor > 0){
html += `<div>Motor (${motor}) - ₹${motor * prices.motor}</div>`;
}
if(shikara > 0){
html += `<div>Shikara (${shikara}) - ₹${shikara * prices.shikara}</div>`;
}
if(paddle > 0){
html += `<div>Paddle (${paddle}) - ₹${paddle * prices.paddle}</div>`;
}

if(html === ""){
html = "No boats selected";
}

document.getElementById("summaryBox").innerHTML = html;
document.getElementById("totalAmount").innerText = "TOTAL ₹" + total;
}

function goHome(){
window.location.href = "index.html";
}

function nextStep(){

let name = document.getElementById("name").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let gmail = document.getElementById("gmail").value.trim();

let motor = parseInt(document.getElementById("motor").value) || 0;
let shikara = parseInt(document.getElementById("shikara").value) || 0;
let paddle = parseInt(document.getElementById("paddle").value) || 0;

if(motor === 0 && shikara === 0 && paddle === 0){
alert("Select at least 1 boat");
return;
}

if(!name || !mobile || !gmail){
alert("Fill all details");
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

window.location.href = "boat-preview.html";
}

document.addEventListener("DOMContentLoaded", updateTotal);

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", function(){

    setTimeout(() => {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 300);

  });
});