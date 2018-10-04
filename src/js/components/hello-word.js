import jails from 'jails-js';

jails('hello-word', (component, element) => {

  component.init = () => {
    helloWord()
  };

  const helloWord = () => {
    console.log('Jails 🤩');
  }

});

jails.start()