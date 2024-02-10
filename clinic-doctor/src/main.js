import './styles/typography.scss';
import { Burger } from './burger';

const burger = new Burger();

document.querySelector('.burger-button').addEventListener('click', (e) => {
  e.preventDefault();
  burger.changeButton();
})