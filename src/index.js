import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav__btn');
const navElm = document.querySelector('#nav');
const navItems = document.querySelectorAll('#nav__item');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navElm.classList.toggle('nav-closed');
  });
});

/* const navElm = document.querySelector('.nav-btn'); */

/* const allNavItems = document.querySelector('.navigation'); */

/* navElm.addEventListener('click', (e) => {
  navigation.classList.toggle('.nav-closed');
}); */
/* 
allNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigation.classList.toggle('nav-closed');
  });
}); */

/* const navElm = document.querySelector('#nav-btn'); */
/* 
navElm.addEventListener('click', (e) => {
  const navigation = document.querySelector('.nav-btn');
  navigation.classList.toggle('nav-closed');
});
 */
