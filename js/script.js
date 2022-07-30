import { dfschedule, dfartists } from './datainfo.js';

// Hamburger-menu setup
const hambIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');
const menuItems = document.getElementById('items-menul');

// Operation when SHOWING items
const showItems = () => {
  hambIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  menuItems.classList.add('active');
  menuItems.style.display = 'flex';
};
// Operation when HIDING items
const hideItems = () => {
  closeIcon.style.display = 'none';
  hambIcon.style.display = 'block';
  menuItems.classList.remove('active');
  menuItems.style.display = 'none';
};

// ### Handling the hamburger menu ###
// Handling hamburgerMenu open/close behavior
document.getElementById('menuHamburger').addEventListener('click', () => {
  if (hambIcon.style.display === 'block') {
    showItems();
  } else {
    hideItems();
  }
});
// Handling when an item from the menu is clicked
menuItems.addEventListener('click', () => {
  if (menuItems.style.display === 'flex') {
    hideItems();
  }
});

const current = window.location.pathname;

if (current === '/index.html' || current === '/') {
  const schedCards = document.getElementById('schedCards');
  let scheduleCardsHtml = '';
  dfschedule.forEach((e) => {
    scheduleCardsHtml += `
  <div class="inner-card" id="${e.id}">
    <img src="${e.icon}">
    <h3>${e.title}</h3>
    <p>${e.text}</p>
  </div>
  `;
  });
  schedCards.innerHTML = scheduleCardsHtml;

  const artistsCards = document.getElementById('artistsCards');
  let artistsCardsHtml = '';
  dfartists.forEach((art) => {
    artistsCardsHtml += `
  <div class="artists-card" id="${art.id}">
  <img src="${art.img}">
  <div class="artists-txt">
    <h2>${art.bandName}</h2>
    <h3>${art.style}</h3>
    <div class="soft-line"></div>
    <p>${art.desc}</p>
  </div>
</div>
  `;
  });
  artistsCards.innerHTML = artistsCardsHtml;
}