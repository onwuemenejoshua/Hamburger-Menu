const mainMenu = document.querySelector(".mainMenu");
const closemenu = document.querySelector(".closeMenu");
const openmenu = document.querySelector(".openMenu");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirmPassword");
const details = document.querySelector("#details");

//  FOR THE HAMBURGER MENU.

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.right = "0";
}

function close() {
  mainMenu.style.right = "-100%";
}

// FOR THE FORM VALIDATION.

details.addEventListener("submit", (e) => {
  //this means prevent the form from submitting.
  e.preventDefault();
});

// Return true if the input argument is empty
const isRequired = (value) => (value === "" ? false : true);

// // the following isBetween return false if the length argument is not between the min and max value

// const isBetween = (length, min, max) => length< min || length > max ? false: true;

// to check if an email is valid, we will use a regular expression.
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//to check if a password is secure. which match a specified pattern, you'll use a regular expression.

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

//the "showError() function" highlights the border of the input field and displays an error message if the input field is invalid.

const showError = (input, message) => {
  //get the form-name element i.e the parent element of the input field
  const formName = input.parentElement;

  //add the error class i.e remove the success class and the the error class to the form field element.
  formName.classList.remove("success");
  formName.classList.add("error");

  //show the error message. i.e set the error message to its textContent property of the small element
  const error = formName.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the form field element
  const formName = input.parentElement;

  //remove the error class
  formName.classList.remove("error");
  formName.classList.add("success");

  //hide the error message
  const error = formName.querySelector("small");
  error.textContent = ""; //here it textContent of the error message is set to blank
};

//VALIDATION OF THE EMAIL FIELD

//it returns true if the email is provided and valid. it uses the isRequired() and isEmailValid() functions for checking. and it used the showError() and showSuccess() function to provide feedback in case of error and success.

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

//VALIDATION OF THE PASSWORD. it return checks if the password field, is provided and match the required format.

const checkPassword = () => {
  let valid = false;
  const password = passwordEl.value.trim();
  if (!isRequired(password)) {
    showError(passwordEl, "password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "password must has at least 8 characters that inlcuse at least 1 lowercase character, 1 uppercase character, and 1 special character."
    );
  } else {
    showError(passwordEl);
    valid = true;
  }
  return valid;
};

//VALIDATION FOR THE CONFIRM PASSWORD. it checks if the confirm password is the same as the password.

const checkConfirmPassword = () => {
  let valid = false;
  //check confirm password
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "please enter the password again");
  } else if (password !== confirmPasswordEl) {
    showError(confirmPasswordEl, "confirm password does not match");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};

//MODIFYING THE SUBMIT EVENT HANDLER
