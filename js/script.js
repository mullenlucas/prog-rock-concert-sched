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

/* When changing screen-size after closing the hamburger menu
(therefore, hiding the "menuItems" list)
so the items remain hidden on desktop.
This shouldn't really be a problem since users wouldn't be browsing from one screen size to another,
in the same session,
but just to make the code function properly in such unrealistic scenarios, this fix is added */

const x = window.matchMedia('(min-width: 768px)');

x.onchange = (e) => {
  if (e.matches) {
    menuItems.style.display = 'flex';
  } else {
    menuItems.style.display = 'none';
  }
};

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