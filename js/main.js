// variables
const form = document.querySelector('form');


// evento, json y local storage

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form); // Convierte en array de arrays
  const obj = Object.fromEntries(formData); // Array de arrays a objeto

  const json = JSON.stringify(obj);
  localStorage.setItem('form', json);

  window.location.href = "gracias.html";
});
