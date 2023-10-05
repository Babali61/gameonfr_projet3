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
  const locationInputs = Array.from(document.querySelectorAll('input[name="location"]'));


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

// Récupérer le formulaire et le corps du modal
const form = document.forms['reserve'];
const modalBody = document.querySelector('.modal-body');

// Sauvegarder le HTML initial du modal pour pouvoir le réinitialiser plus tard
const initialModalHtml = modalBody.innerHTML;

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
  // Empêcher la soumission du formulaire
  event.preventDefault();

  // Valider le formulaire
  if (validate()) {
    // Créer un nouvel élément p
    const thankYouMessage = document.createElement('p');

    // Lui donner une classe
    thankYouMessage.className = 'messageRemerciement';

    // Ajouter du texte
    thankYouMessage.textContent = 'Merci pour votre inscription';

    // Créer un nouveau bouton de fermeture
    const closeButton = document.createElement('button');

    // Lui donner une classe
    closeButton.className = 'close-button';

    // Ajouter du texte
    closeButton.textContent = 'Fermer';

    // Ajouter un écouteur d'événement de clic pour fermer le modal
    closeButton.addEventListener('click', function() {
      // Cacher le modal
      modalbg.style.display = "none";

      // Réinitialiser le HTML du modal à son état initial
      modalBody.innerHTML = initialModalHtml;
    });

    // Créer un nouvel élément div
    const containerDiv = document.createElement('div');

    // Lui donner une classe
    containerDiv.className = 'message-container';

    // Ajouter le message de remerciement et le bouton de fermeture au div
    containerDiv.appendChild(thankYouMessage);
    containerDiv.appendChild(closeButton);

    // Effacer le corps du modal
    modalBody.innerHTML = '';

    // Ajouter le div au corps du modal
    modalBody.appendChild(containerDiv);
  }
});

window.onload = function() {
  var closeModal = document.getElementsByClassName("close")[0];
  var modal = document.getElementsByClassName("bground")[0];

  closeModal.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
