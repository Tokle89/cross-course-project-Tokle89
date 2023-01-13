const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#name-error");
const dateOfBirth = document.querySelector("#date");
const dateOfBirthError = document.querySelector("#date-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const streetAddress = document.querySelector("#address");
const streetAddressError = document.querySelector("#address-error");
const cityAddress = document.querySelector("#city");
const cityaddressError = document.querySelector("#city-error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country-error");
const button = document.querySelector("#form-button");

export function validateForm() {
  fullName.addEventListener("keydown", function () {
    if (checkLength(fullName.value, 5) === true) {
      fullNameError.style.display = "none";
    } else {
      fullNameError.style.display = "block";
    }
  });

  dateOfBirth.addEventListener("keydown", function () {
    if (checkLength(dateOfBirth.value, 9) === true) {
      dateOfBirthError.style.display = "none";
    } else {
      dateOfBirthError.style.display = "block";
    }
  });
  email.addEventListener("keydown", function () {
    if (validateEmail(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
  });

  streetAddress.addEventListener("keydown", function () {
    if (checkLength(streetAddress.value, 5) === true) {
      streetAddressError.style.display = "none";
    } else {
      streetAddressError.style.display = "block";
    }
  });

  cityAddress.addEventListener("keydown", function () {
    if (checkLength(cityAddress.value, 4) === true) {
      cityAddressError.style.display = "none";
    } else {
      cityAddressError.style.display = "block";
    }
  });

  cityAddress.addEventListener("keydown", function () {
    if (checkLength(cityAddress.value, 4) === true) {
      cityAddressError.style.display = "none";
    } else {
      cityAddressError.style.display = "block";
    }
  });

  country.addEventListener("keydown", function () {
    if (checkLength(country.value, 4) === true) {
      countryError.style.display = "none";
    } else {
      countryError.style.display = "block";
    }
  });
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
