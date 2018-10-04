import jails from 'jails-js';

jails('loading', (component, element) => {

  component.init = () => {
    jails.subscribe('show-load', showLoad)
    jails.subscribe('remove-load', hideLoad)
  };

  const showLoad = () => {
    element.classList.add('-active')
  }

  const hideLoad = () => {
    element.classList.remove('-active')
  }

});

jails.start()