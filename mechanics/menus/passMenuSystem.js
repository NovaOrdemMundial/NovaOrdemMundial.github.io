passwordBtn.addEventListener('click', () => {
  openPassScreen();
});

menusVenishTrap.addEventListener('click', () => {
  onMenusTabsClose();
  onItemViewerClose();
  customColse();
});

function openPassScreen(){
  passBackScreen.style.setProperty('--PassScreenDisplay', 'flex');
  menusVenishTrap.style.setProperty('--menusVenishDisplay', 'block');
  menusVenishTrap.style.pointerEvents = 'auto';
  setTimeout(() => {
    passBackScreen.style.opacity = '1';
    setTimeout(() => {
      passScreen.style.opacity = '1'
    }, 400);
  },100);
}