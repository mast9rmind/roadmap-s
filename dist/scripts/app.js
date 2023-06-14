const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const navItemsWrapper = document.getElementById('nav-items');

const MENUICOM = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
</svg>`;

const CLOSEICON = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`;

menuBtn.addEventListener('click', () => {
  if (navItemsWrapper.classList.contains('hidden')) {
    menuIcon.innerHTML = CLOSEICON;
    navItemsWrapper.classList.remove('hidden')
  } else {
    menuIcon.innerHTML = MENUICOM;
    navItemsWrapper.classList.add('hidden')
  }
})
