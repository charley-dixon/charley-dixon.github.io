const form  = document.getElementsByTagName('form')[0];

// form fields
const email = document.getElementById('mail');
const phone = document.getElementById('tel');
const message = document.getElementById('msg');

// error display
const errorDisplay = document.querySelector('span.error')

// event listener upon form submission that checks the validity of each field
form.addEventListener('submit', function (event) {
  if(!email.validity.valid || !message.validity.valid) {
    // If one of them in invalid, we display the appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  // Check if email is empty
  if(email.validity.valueMissing) {
    errorDisplay.textContent  = 'Please provide an email address.';
    email.className = 'invalid';
    // resetting the class of the message name in case someone submits a form with an invalid message
    message.className = '';
  } else if(email.validity.typeMismatch) {
    errorDisplay.textContent = 'Please make sure you enter a valid email address.';
    email.className = 'invalid';
    message.className = '';
  } else if(message.validity.tooShort) {
    errorDisplay.textContent = `Please provide at least ${message.minLength} characters.`;
    email.className = '';
    message.className = 'invalid';
  } else if(message.textLength === 0) {
    errorDisplay.textContent = 'Please provide a message.';
    email.className = '';
    message.className = 'invalid';
  }
  errorDisplay.className = 'error live';
}
