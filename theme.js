/* Runs before CSS to avoid a theme flash. Light is the default. */
(() => {
  try {
    if (localStorage.getItem('overwatch-theme') === 'dark') {
      document.documentElement.dataset.theme = 'dark';
    }
  } catch (_) { /* The site remains usable if storage is disabled. */ }
})();
