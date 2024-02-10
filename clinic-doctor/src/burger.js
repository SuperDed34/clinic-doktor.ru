export class Burger {
  body = document.querySelector('body');
  burger = document.querySelector('.burger-box');
  menu = document.querySelector('.menu');
  hiddenBurger = document.querySelector('.burger-nav');
  hiddenBurgerContainer = document.querySelector('.burger-nav-menu');
  menuItems = document.querySelectorAll('.menu-item');

  changeButton() {
    this.burger.classList.toggle('rotate');
    if (this.burger.classList.contains('rotate')) {
      this.hiddenBurgerContainer.appendChild(this.menu);
      this.hiddenBurger.classList.add('show');
      this.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => this.hiddenBurgerContainer.removeChild(this.menu), 1000);
      this.hiddenBurger.classList.remove('show');
      this.body.style.overflow = 'auto';
    }
  }

}