import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const submitButton = document.querySelector('button');

// chcę pobrać stan z localStorage
const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const parsedState = JSON.parse(savedState);
  form.email.value = parsedState.email;
  form.message.value = parsedState.message;
}

// funkcja throttle
const updateLocalStorage = throttle(() => {
  // obiekt na przechowanie aktualnych wartości pól formularza
  const currentState = {
    email: form.email.value,
    message: form.message.value,
  };

  // zapisuję wpisane dane do localStorage
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
}, 500);

// nasłuchiwanie na input i aktualizacja localStorage
form.addEventListener('input', () => {
  updateLocalStorage();
});

// nasłuchiianie na submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // czyszczenie pól
  form.email.value = '';
  form.message.value = '';

  // usuwanie tego, co jest zapisane w localStorage
  localStorage.removeItem('feedback-form-state');

  // logowanie danych do konsoli
  console.log('Form submitted with data:', savedState);
});
