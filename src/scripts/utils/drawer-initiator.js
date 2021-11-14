const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, {
    nav,
    navbarNav,
  }) {
    event.stopPropagation();
    navbarNav.classList.toggle('active');
    nav.classList.toggle('nav-active');
  },

  _closeDrawer(event, {
    nav,
    navbarNav,
  }) {
    event.stopPropagation();
    navbarNav.classList.remove('active');
    nav.classList.remove('nav-active');
  },

};

export default DrawerInitiator;
