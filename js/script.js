
const menuBtn = document.querySelector('.hamburger'); 
const menu = document.querySelector('.navigation');
const menuOption = document.querySelectorAll('.menu-option');
const hamburgerMenu = document.querySelector('#hamburger-menu');


let isOpen = false;

menuBtn.addEventListener('click', () => { 
  menuBtn.classList.toggle('hamburger--active'); 
  if(isOpen){
    menu.style.left = '100%';
    isOpen = !isOpen;
  } else {
    menu.style.left = '0%';
    isOpen = !isOpen;
  }
});

const closeMenu = () => {
  menuOption.forEach(element => {
    element.addEventListener('click', () => {
      menu.style.left = "100%"; 
      isOpen = !isOpen;
      hamburgerMenu.classList.remove('hamburger--active');
    });
  });
}

closeMenu();

gsap.registerPlugin(ScrollTrigger);

const aboutMeText = document.querySelector('.about-me-text-wrapper');

gsap.fromTo(aboutMeText, {y: '+=100', opacity: 0}, {y: 0, 
opacity: 1, stagger: 0.2, duration: 1.5, ease: 'easeInOut',
scrollTrigger: {
  trigger: '.about-me-text-wrapper',
  start: 'top 65%'
}})







