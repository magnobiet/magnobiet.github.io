import { $, addClass, documentReady, toggleClass } from './document';
import Favicon from './favicon';

class App {

  #favicon = new Favicon();

  constructor() {
    this.init();
  }

  #getCurrentTheme() {
    return localStorage.getItem('theme') || 'theme-dark';
  }

  #activateSavedTheme() {
    addClass('body', this.#getCurrentTheme());
  }

  #saveCurrentTheme() {
    localStorage.setItem('theme', $('body').className || 'theme-dark');
  }

  #toggleTheme() {

    toggleClass('body', 'theme-dark');
    toggleClass('body', 'theme-light');

    this.#saveCurrentTheme();

  }

  #replaceFavicon() {

    this.#favicon.icons = ['🖥️', '🔗', '📧', '💻', '🤖', '💾', '🖱️', '⌨️', '👨‍💻']
    this.#favicon.toggle(2500);

  }

  init() {

    this.#activateSavedTheme();
    this.#replaceFavicon();

    $('[data-toggle-theme]').addEventListener('click', () => {

      this.#toggleTheme();
    });

  }

}

documentReady(() => new App());
