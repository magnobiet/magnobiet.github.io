export function documentReady(fn) {

  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

}

export function $(element) {
  return document.querySelector(element);
}

export function toggleClass(element, className) {
  $(element).classList.toggle(className);
}

export function addClass(element, className) {
  $(element).className = className;
}
