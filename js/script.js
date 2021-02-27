
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

const aboutMeHeader = document.querySelector('.about-me-header');

console.log(aboutMeHeader);

const addClass = () => {
  aboutMeHeader.classList.add('active');
}

gsap.fromTo(aboutMeText, {}, { addClass,
  scrollTrigger: {
    trigger: '.about-me-text-wrapper',
    start: 'top 65%' 
  }})

const profession = document.querySelector('.profession');

const professionActive = () => {
  profession.classList.add('profession-active');
}

gsap.fromTo(aboutMeText, {}, { professionActive,
  scrollTrigger: {
    trigger: 'header',
    start: 'top 1%' 
  }})

  const headerName = document.querySelector('.header-name');

  const headerNameActive = () => {
    headerName.classList.add('header-name-active');
  }
  gsap.fromTo(aboutMeText, {}, { headerNameActive,
    scrollTrigger: {
      trigger: 'header',
      start: 'top 1%' 
    }})
