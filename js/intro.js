
import {getElementFromTemplate, select} from './lib';
import greetingElement from './greeting';

export default () => {

  const intro = {
    title: '*',
    text: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
  };

  const introTemplate = `<div id="intro" class="intro">
    <h1 class="intro__asterisk">${intro.title}</h1>
    <p class="intro__motto"><sup>*</sup> ${intro.text}</p>
  </div>`;

  const introElement = getElementFromTemplate(introTemplate);

  introElement.querySelector('.intro__asterisk').onclick = () => select(greetingElement());

  return introElement;

};
