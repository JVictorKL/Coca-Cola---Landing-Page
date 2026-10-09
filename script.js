const menu = document.querySelector('.menu');
const navUL = document.querySelector('.navegation ul');

menu.addEventListener('click', ()=> {
    navUL.classList.toggle('active');
    menu.classList.toggle('active');
})
