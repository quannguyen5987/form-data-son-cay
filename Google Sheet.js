const scriptURL = 'https://script.google.com/macros/s/AKfycbzBxpvltiKHUUK894EiD3eQ3tuNuzbc0BDKaEHAWicxsf0zmAFU3gACqEIlijx1T0-t/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})