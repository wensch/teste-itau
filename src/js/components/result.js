import jails from 'jails-js';
import mustache from 'mustache';

jails('result', (component, element) => {
    let templateResult = element.querySelector('#template-result').innerHTML
    let templateReposit = element.querySelector('#template-repositories').innerHTML
    let listRepositories = element.querySelector('.perfil-repositories')
    let listHolder = element.querySelector('.perfil-content')
    let btnAPI = element.querySelectorAll('.btn-api')
    let title
    
    component.init = () => {
      mustache.tags = ["[[", "]]"];
      jails.subscribe('user-send', renderFunctions)
      nodeListListner()
    };
    
    const renderFunctions = (data, url) => {
      clearTemplate()
      btnAPI.addEventListener('click', (event) => showData(event, url))
      renderTemplate(templateResult, data, listHolder)
    }

  const showData = (event, value) => {
    let url = 'https://api.github.com/users/' + value +'/'+ event.target.dataset.api

    jails.publish('show-load')

    fetch(url)
    .then(response => response.json())
    .then((data) => {
      renderTemplate(templateReposit, data, listRepositories)
    });
    
    title = 'Popular ' + event.target.dataset.title
  }

  const renderTemplate = (template, data, holderRendered) => {
    let rendered = mustache.render(template, {data});
    holderRendered.innerHTML = rendered
    if (element.querySelector('.title-template')) element.querySelector('.title-template').textContent = title
    jails.publish('remove-load')
  }

  const clearTemplate = () => {
    listRepositories.innerHTML = ''
  }

  const nodeListListner = () => {
    NodeList.prototype.addEventListener = function (event, func) {
      this.forEach(function (content, item) {
        content.addEventListener(event, func);
      });
    }
  }
});

jails.start()