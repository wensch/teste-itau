import jails from 'jails-js';

jails('verify-url', (component, element) => {

  component.init = () => {
    verifyUrl()
  };

  const verifyUrl = () => {
    let pathname = window.location.pathname.replace('/', '')
    let url = "https://api.github.com/users/" + pathname
    let templateError = document.querySelector('.msg-error').querySelector('.title-error')

    if (pathname) {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            element.classList.add('-error')
            templateError.innerHTML = 'Usuário <i>' + pathname + '</i> não foi encontrado'
          }
        })
        .then((data) => {
          jails.publish('user-send', data, pathname)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
});

jails.start()