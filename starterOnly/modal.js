function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");
const modalCloseButton = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseButton.addEventListener("click", closeModal);
//document.querySelector("#email").addEventListener("click", debugMode)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = "none";
}

function validate(){
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const cgu = document.getElementById("checkbox1").checked;
  const location = document.querySelector('input[name="location"]:checked');

  var valid = true;
  
  if(first.length < 2){
    showError("first");
    valid = false;
  }

  if(last.length < 2){
    showError("last");
    valid = false;
  }

  var re = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(!re.test(email)){
    showError("email");
    valid = false;
  }

  if(isNaN(quantity) || quantity == "" || quantity < 0){
    showError("quantity");
    valid = false;
  }

  if(!location){
    showError("location");
    valid = false;
  }

  if(!cgu){
    showError("cgu");
    valid = false;
  }

  return valid;
}

function showError(error){
  document.getElementById("error-" + error).style.display = "block";
  const field = document.querySelector('input[name="' + error + '"]');
  if(field){
    field.style.border = "1px solid red";
  }
  
}

// function debugMode(){
  
// }