import jails from 'jails-js';

jails('sticky-menu', (component, element) => {

  let stickyHeight = 20
  let lastScrollPosition = 0
  let doc = document.documentElement
  let main = document.querySelector('main')

  component.init = () => {
    document.addEventListener('scroll', debounce(scroll, 1))
  };

  const scroll = () => {
    let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (scrollTop > stickyHeight) {

      if (scrollTop < lastScrollPosition) {
        element.classList.remove('-fix')
        main.classList.remove('-fix')

      } else {
        element.classList.add('-fix')
        main.classList.add('-fix')
      }

      lastScrollPosition = scrollTop

    } else {
      element.classList.remove('-fix')
      main.classList.remove('-fix')
    }
  }

  const debounce = (func, wait, immediate) => {
    let timeout;
    return function () {
      let context = this;
      let args = arguments;

      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
});
jails.start()