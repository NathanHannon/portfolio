// Apply the theme before React mounts to prevent flickering
(function () {
  var savedMode = localStorage.getItem('darkMode');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDarkMode = savedMode ? savedMode === 'enabled' : prefersDark;
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.body.classList.toggle('force-light-mode', !isDarkMode);
})();
