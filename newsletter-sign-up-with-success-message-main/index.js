const signUpForm = document.getElementById("form-main");
const successForm = document.getElementById("success-form");
const formButton = document.getElementById("button");
const errorMessage = document.getElementById("error-message");

function handleSuccessInput() {
  event.preventDefault();
  signUpForm.style.display = "none";
  successForm.style.display = "flex";
  console.log("somethign happened");
}

function dismissSuccessMessage() {
  successForm.style.display = "none";
  signUpForm.style.display = "flex";
  errorMessage.style.display = "none";
}

function errorValidation() {
  errorMessage.style.display = "block";
}
