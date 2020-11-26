let burger = document.querySelector('.js-burger');
let nav = document.querySelector('.js-menu');
let body= document.querySelector('.js-body')

burger.addEventListener('click',()=>{
  nav.classList.toggle('_active');
  burger.classList.toggle('_active');
  body.classList.toggle('_active');

})