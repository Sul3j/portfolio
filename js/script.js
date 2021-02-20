const menuBtn = document.querySelector('.hamburger'); 
const menu = document.querySelector('.navigation');

isOpen = false;

menuBtn.addEventListener('click', () => { 
  menuBtn.classList.toggle('hamburger--active'); 
  console.log(menu.style.right.value)
  if(isOpen){
    menu.style.left = '100%';
    isOpen = !isOpen;
  } else {
    menu.style.left = '0%';
    isOpen = !isOpen;
  }
});

