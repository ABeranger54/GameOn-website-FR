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
  const radio = document.querySelector('input[name="location"]:checked');
  
  if(first.length < 2) return false;
  if(last.length < 2) return false;
  var re = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(!re.test(email)) return false;
  if(isNaN(quantity) || quantity < 0) return false;
  if(!radio) return false;
  if(!cgu) return false;

  return true;
}

// function debugMode(){
  
// }