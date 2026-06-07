/**
 * THEME MANAGER
 * Handles dark/light theme switching with localStorage persistence
 */

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'forge-theme';
    this.DARK_THEME = 'dark';
    this.LIGHT_THEME = 'light';
    this.init();
  }

  init() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? this.DARK_THEME 
      : this.LIGHT_THEME;
    
    const theme = savedTheme || systemPreference;
    this.setTheme(theme);
    this.setupThemeToggle();
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateThemeIcon(theme);
  }

  getTheme() {
    return document.documentElement.getAttribute('data-theme') || this.DARK_THEME;
  }

  toggleTheme() {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
    this.setTheme(newTheme);
  }

  setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.innerHTML = theme === this.DARK_THEME ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-label', `Switch to ${theme === this.DARK_THEME ? 'light' : 'dark'} mode`);
    }
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}
