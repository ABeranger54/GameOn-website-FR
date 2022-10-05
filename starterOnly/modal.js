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
const modalCloseButton = document.querySelector(".close");
const validationClose = document.getElementById("validationMessage");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseButton.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

// close form validation message
function closeValidationMessage(){
  validationClose.style.display = "none";
}

// clear field having id as id, replacing it's value to empty ("")
function clearField(id){
  const elem = document.getElementById(id);
  if(elem){
    elem.value = "";
  }
  
}

// callback validation function, associated with submit form button
function validate(){
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const emailRegexp = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i);
  const birthdate = new Date(document.getElementById("birthdate").value);
  const quantity = document.getElementById("quantity").value;

  // associative list : key is field id, value is validation condition
  var fieldConditions = {
    "first" : first.length >= 2,
    "last" : last.length >= 2,
    "email" : emailRegexp.test(email),
    "birthdate" : birthdate instanceof Date && !isNaN(birthdate) && birthdate < new Date(),
    "quantity" : !isNaN(quantity) && quantity != "" && quantity >= 0,
    "location" : document.querySelector('input[name="location"]:checked'),
    "cgu" : document.getElementById("checkbox1").checked
  };

  var valid = true;

  // for each field, send id and condition to showError function
  for(var key in fieldConditions){
    showError(fieldConditions[key], key);
    if(!fieldConditions[key]){ // if one field does't match condition, form is not valid
      valid = false;
    }
  }

  if(valid){ // if form is valid, clear all fields values, close form and show validation message
    for(var key in fieldConditions){
      clearField(key);
    }
      closeModal();
      validationClose.style.display = "block";
  }

  return false; // callback function always return false, to avoid page refresh (and to simulate back-end response)
}

// show or hide error message
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