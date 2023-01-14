const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#name-error");
const dateOfBirth = document.querySelector("#date");
const dateOfBirthError = document.querySelector("#date-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const streetAddress = document.querySelector("#address");
const streetAddressError = document.querySelector("#address-error");
const cityAddress = document.querySelector("#city");
const cityAddressError = document.querySelector("#city-error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

export function validateForm() {
  if (fullName) {
    fullName.addEventListener("keydown", function () {
      if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
      } else {
        fullNameError.style.display = "block";
      }
    });
  }
  if (dateOfBirth) {
    dateOfBirth.addEventListener("keydown", function () {
      if (checkLength(dateOfBirth.value, 6) === true) {
        dateOfBirthError.style.display = "none";
      } else {
        dateOfBirthError.style.display = "block";
      }
    });
  }

  if (email) {
    email.addEventListener("keydown", function () {
      if (validateEmail(email.value)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }
    });
  }

  if (streetAddress) {
    streetAddress.addEventListener("keydown", function () {
      if (checkLength(streetAddress.value, 5) === true) {
        streetAddressError.style.display = "none";
      } else {
        streetAddressError.style.display = "block";
      }
    });
  }
  if (cityAddress) {
    cityAddress.addEventListener("keydown", function () {
      if (checkLength(cityAddress.value, 4) === true) {
        cityAddressError.style.display = "none";
      } else {
        cityAddressError.style.display = "block";
      }
    });
  }

  if (country) {
    country.addEventListener("keydown", function () {
      if (checkLength(country.value, 4) === true) {
        countryError.style.display = "none";
      } else {
        countryError.style.display = "block";
      }
    });
  }
  if (message) {
    message.addEventListener("keydown", function () {
      if (checkLength(message.value, 2) === true) {
        messageError.style.display = "none";
      } else {
        messageError.style.display = "block";
        console.log("working");
      }
    });
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(mail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(mail);
  return patternMatches;
}
