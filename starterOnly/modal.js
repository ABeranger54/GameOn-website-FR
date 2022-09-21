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

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = "none";
}

function closeValidationMessage(){
  
}

function validate(){
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  var emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  const quantity = document.getElementById("quantity").value;

  var fieldConditions = {
    "first" : first.length >= 2,
    "last" : last.length >= 2,
    "email" : emailRegex.test(email),
    "quantity" : !isNaN(quantity) && quantity != "" && quantity >= 0,
    "location" : document.querySelector('input[name="location"]:checked'),
    "cgu" : document.getElementById("checkbox1").checked
  };

  var valid = true;

  for(var key in fieldConditions){
    showError(fieldConditions[key], key);
    if(!fieldConditions[key]){
      valid = false;
    }
  }

  return valid;
}

function showError(valid, error){

  const errorDiv = document.getElementById("error-" + error);
  const field = document.querySelector('input[name="' + error + '"]');

  if(!valid){
    errorDiv.style.display = "block";
    if(field){
      field.style.border = "1px solid red";
    }
  }else{
    errorDiv.style.display = "none";
    if(field){
      field.style.border = "none";
    }
  }
}