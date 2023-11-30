const form = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
  //jeśli istnieją wpisane dane, chcę je tu wywołać
  const savedState = localStorage.getItem('feedback-form-state');
  form.email.value = savedState.email;
  form.message.value = savedState.message;

  // wykorzystanie funkcji throttle
  const updateLocalStorage = _.throttle(() => {
    // tworzę obiekt, który przechowa aktualne wartości pól formularza
    const currentState = {
      email: form.email.value,
      message: form.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  }, 500);

  form.addEventListener('input', () => {
    updateLocalStorage();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    // czyszczenie pól
    localStorage.removeItem('feedback-form-state');
    form.email.value = '';
    form.message.value = '';

    console.log('Form submitted with data:', savedState);
  });
});
