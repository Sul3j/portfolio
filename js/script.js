const menuBtn = document.querySelector('.hamburger'); 
const menu = document.querySelector('.navigation');
const menuOption = document.querySelectorAll('.menu-option');
const hamburgerMenu = document.querySelector('#hamburger-menu');


isOpen = false;

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

console.log(hamburgerMenu);

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





