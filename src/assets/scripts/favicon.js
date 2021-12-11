import { $ } from './document';

export default class Favicon {

  /**
   * @type { Array<string> }
   */
  icons = ['🤖', '👨‍💻'];

  /**
  *
  * Replace the page favicon by the new Emoji
  * @param { string } emoji
  * @returns void
  */
  #setFavicon(emoji) {

    $(`head > link[rel='icon']`).setAttribute(
      `href`,
      `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`.trim()
    );

  }

  /**
   *
   * Toggle the page favicon Emoji
   * @param { number } milliseconds
   * @returns void
   */
  toggle(milliseconds) {

    const icons = this.icons;
    let current = 0;

    setInterval(() => {

      this.#setFavicon(icons[current]);

      if (current < icons.length - 1) {
        current++;
      } else {
        current = 0;
      }

    }, milliseconds);

  }

}
