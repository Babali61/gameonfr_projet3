// Cette fonction permet de basculer la navigation (probablement une barre de navigation mobile) entre un état réduit et un état étendu.
function editNav() {
  // Récupère l'élément de la barre de navigation par son ID.
  var x = document.getElementById("myTopnav");

  // Vérifie si l'élément a la classe "topnav".
  if (x.className === "topnav") {
    // Si c'est le cas, ajoute la classe "responsive" à l'élément.
    x.className += " responsive";
  } else {
    // Sinon, réinitialise l'élément à la classe "topnav".
    x.className = "topnav";
  }
}

// DOM Elements
// Récupère les éléments nécessaires du DOM.
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Ajoute un écouteur d'événement à chaque bouton modal pour lancer la modale lors d'un clic.
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Cette fonction affiche la modale.
function launchModal() {
  modalbg.style.display = "block";
}

// Cette fonction valide les entrées du formulaire.
function validate() {
  // Définit un indicateur de validité initial à vrai.
  let isValid = true;

  // Validation pour le prénom.
  const firstName = document.getElementById("first");
  const firstNameError = document.getElementById("firstName-error");
  if (firstName.value.trim() === "" || firstName.value.length < 2) {
    firstNameError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid = false;
  } else {
    firstNameError.textContent = "";
  }

  // Validation pour le nom.
  const lastName = document.getElementById("last");
  const lastNameError = document.getElementById("name-error");
  if (lastName.value.trim() === "") {
    lastNameError.textContent = "Le champ du nom ne peut pas être vide.";
    isValid = false;
  } else {
    lastNameError.textContent = "";
  }

  // Validation pour l'email.
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email.value.trim() === "") {
    emailError.textContent = "Le champ de l'e-mail ne peut pas être vide.";
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validation pour la date de naissance.
  const birthdate = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdate-error");
  if (birthdate.value.trim() === "") {
    birthdateError.textContent =
      "Le champ de la date de naissance ne peut pas être vide.";
    isValid = false;
  } else {
    birthdateError.textContent = "";
  }

  // Validation pour la quantité.
  const quantity = document.getElementById("quantity");
  const quantityError = document.getElementById("quantity-error");
  if (quantity.value.trim() === "") {
    quantityError.textContent =
      "Le champ de la quantité ne peut pas être vide.";
    isValid = false;
  } else {
    quantityError.textContent = "";
  }

  // Début de la section de validation pour la localisation

  // Convertit NodeList des éléments 'input' ayant l'attribut name="location" en tableau
  // Les éléments NodeList ne peuvent pase être utilisés avec des fonction js style (map, forEach etc ...)
  const locationInputs = Array.from(
    document.querySelectorAll('.radio-input')
  );

  // Récupère l'élément HTML qui affiche les erreurs de localisation
  const locationError = document.getElementById("location-error");

  // Initialise un drapeau pour vérifier si une localisation a été sélectionnée
  let isLocationSelected = false;

  locationInputs.forEach((input) => {
    if (input.checked) {
      isLocationSelected = true;
    }
  });
  
  if (!isLocationSelected) {
    locationError.textContent = "Veuillez choisir une localisation.";
    isValid = false; // Met à jour le statut de validation
  } else {
    locationError.textContent = "";
  }
  
  const conditions = document.getElementById('checkbox1');
  const conditionsError = document.getElementById('conditions-error');
  if (!conditions.checked) {
    conditionsError.textContent = "Vous devez accepter les conditions d'utilisation.";
    isValid = false;
  } else {
    conditionsError.textContent = '';
  }

  return isValid
}

// Récupère le formulaire et le corps du modal.
const form = document.forms["reserve"];
const modalBody = document.querySelector(".modal-body");

// Sauvegarde le HTML initial du modal pour pouvoir le réinitialiser plus tard.
const initialModalHtml = modalBody.innerHTML;

// Écoute l'événement de soumission du formulaire.
form.addEventListener("submit", function (event) {
  // Empêche la soumission par défaut du formulaire.
  event.preventDefault();

  // Valide le formulaire.
  if (validate()) {
    // Crée et configure le message de remerciement.
    const thankYouMessage = document.createElement("p");
    thankYouMessage.className = "messageRemerciement";
    thankYouMessage.textContent = "Merci pour votre inscription";

    // Crée et configure le bouton de fermeture.
    const closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "Fermer";
    closeButton.addEventListener("click", function () {
      modalbg.style.display = "none";
      modalBody.innerHTML = initialModalHtml;
    });

    // Crée un conteneur pour le message et le bouton.
    const containerDiv = document.createElement("div");
    containerDiv.className = "message-container";
    containerDiv.appendChild(thankYouMessage);
    containerDiv.appendChild(closeButton);

    // Efface le contenu du modal et y ajoute le conteneur.
    modalBody.innerHTML = "";
    modalBody.appendChild(containerDiv);
  }
});

// Fermeture de la modale lors du clic sur la croix ou en dehors de la modale.
window.onload = function () {
  var closeModal = document.getElementsByClassName("close")[0];
  var modal = document.getElementsByClassName("bground")[0];

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalBody.innerHTML = initialModalHtml;
    }
  };
};
