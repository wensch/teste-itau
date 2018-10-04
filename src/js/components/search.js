import jails from 'jails-js';

jails('search', (component, element) => {
  let btn = element.querySelector('.btn-submit')

  component.init = () => {
    btn.onclick = submitForm
  };

  const submitForm = (e) => {
    e.preventDefault()
    let value = element.querySelector('input').value
    window.location.pathname = value
  }
});

jails.start()