import homefunc from './home';
import menufunc from './menu';
import contactfunc from './contact';

function header() {
  const body = document.getElementsByTagName('body')[0];

  const headerdiv = document.createElement('div');
  const contentag = document.getElementById('content');

  headerdiv.setAttribute('class', 'text-center bg-warning my-0');

  const headertext = document.createElement('h1');
  headertext.setAttribute('class', 'text-dark my-0 font-weight-bold');
  headertext.textContent = 'Las Tapas - Tex Mex';
  headerdiv.appendChild(headertext);

  body.insertBefore(headerdiv, contentag);

  const content = document.createElement('div');
  body.insertBefore(content, contentag);
  // body.appendChild(content);

  content.setAttribute('class', 'container-fluid px-0');

  const insidecontent = content.appendChild(document.createElement('div'));
  insidecontent.setAttribute('class', 'btn-group d-flex');

  const home = document.createElement('a');
  home.textContent = 'Home';
  home.setAttribute('class', 'btn btn-dark btn-block mt-0 border font-weight-bold');
  home.setAttribute('id', 'home');
  insidecontent.appendChild(home);

  const menu = document.createElement('a');
  menu.textContent = 'Menu';
  menu.setAttribute('class', 'btn btn-dark btn-block mt-0 border font-weight-bold');
  menu.setAttribute('id', 'menu');
  insidecontent.appendChild(menu);

  const contact = document.createElement('a');
  contact.textContent = 'Contact';
  contact.setAttribute('class', 'btn btn-dark btn-block mt-0 border font-weight-bold');
  contact.setAttribute('id', 'contact');
  insidecontent.appendChild(contact);

  const homeclick = document.getElementById('home');
  const menuclick = document.getElementById('menu');
  const contactclick = document.getElementById('contact');

  homeclick.addEventListener('click', homefunc);
  menuclick.addEventListener('click', menufunc);
  contactclick.addEventListener('click', contactfunc);
}

export default header;