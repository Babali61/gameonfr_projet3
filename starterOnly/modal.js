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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Validation function
function validate() {
  let isValid = true;

  const firstName = document.getElementById('first');
  const firstNameError = document.getElementById('firstName-error');
  if (firstName.value.trim() === '' || firstName.value.length < 2) {
    firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid = false;
  } else {
    firstNameError.textContent = '';
  }

  const lastName = document.getElementById('last');
  const lastNameError = document.getElementById('name-error');
  if (lastName.value.trim() === '') {
    lastNameError.textContent = "Le champ du nom ne peut pas être vide.";
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  const email = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  if (email.value.trim() === '') {
    emailError.textContent = "Le champ de l'e-mail ne peut pas être vide.";
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  const birthdate = document.getElementById('birthdate');
  const birthdateError = document.getElementById('birthdate-error');
  if (birthdate.value.trim() === '') {
    birthdateError.textContent = "Le champ de la date de naissance ne peut pas être vide.";
    isValid = false;
  } else {
    birthdateError.textContent = '';
  }

  const quantity = document.getElementById('quantity');
  const quantityError = document.getElementById('quantity-error');
  if (quantity.value.trim() === '') {
    quantityError.textContent = "Le champ de la quantité ne peut pas être vide.";
    isValid = false;
  } else {
    quantityError.textContent = '';
  }

  // Validate location
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const locationError = document.getElementById('location-error');
  let isLocationSelected = false;

  locationInputs.forEach((input) => {
    if (input.checked) {
      isLocationSelected = true;
    }
  });

  if (!isLocationSelected) {
    locationError.textContent = 'Veuillez choisir une localisation.';
    isValid = false;
  } else {
    locationError.textContent = '';
  }

  const conditions = document.getElementById('checkbox1');
  const conditionsError = document.getElementById('conditions-error');
  if (!conditions.checked) {
    conditionsError.textContent = "Vous devez accepter les conditions d'utilisation.";
    isValid = false;
  } else {
    conditionsError.textContent = '';
  }

  return isValid;

  
}

// Get the form
const form = document.forms['reserve'];

// Listen for submit event
form.addEventListener('submit', function(event) {
  // Stop the form from submitting
  event.preventDefault();

  // Validate the form
  if (validate()) {
    // If validation passes, submit the form manually
    form.submit();
  }
});
