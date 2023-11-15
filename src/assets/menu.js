const getMobileNav = () => {
  return document.getElementById("responsive-nav");
};

const onMenuOpen = () => {
  getMobileNav().classList.add("is-menu-open", "has-modal-open");
};
const onMenuClose = () => {
  getMobileNav().classList.remove("is-menu-open", "has-modal-open");
};
