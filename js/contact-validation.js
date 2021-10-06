const form  = document.getElementsByTagName('form')[0];

// form fields
const email = document.getElementById('mail');
const phone = document.getElementById('tel');
const message = document.getElementById('msg');

// error display
const errorDisplay = document.querySelector('span.error')

// event listener upon form submission that checks the validity of each field
form.addEventListener('submit', function (event) {
  if(!email.validity.valid || !phone.validity.valid || !message.validity.valid) {
    // If one of them in invalid, we display the appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  // Check if phone AND email are empty
  if(email.validity.valueMissing && phone.validity.valueMissing) {
    // just made up errorDisplay b/c I'm think I will just put the error message
    // in one field and then highlight the specific fields where the error is.
    errorDisplay.textContent  = 'Please provide an email address OR a phone number';
  } else if(email.validity.typeMismatch) {
    errorDisplay.textContent = 'Please make sure you enter a valid email address';
    // highlight the email field
  } else if(phone.validity.typeMismatch) { // phone numbers only beotch
    errorDisplay.textContent = 'Please make sure you enter a valid phone number';
  } else if(message.validity.tooShort) {
    errorDisplay.textContent = `Please give me at least ${message.minLength} characters... a little more than hello`
  }

  errorDisplay.className = 'error active';
}
