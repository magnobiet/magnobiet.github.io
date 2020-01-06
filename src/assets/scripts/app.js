function onDocumentReady(fn) {

	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}

}

function $(element) {
	return document.querySelector(element);
}

function toggleClass(element, className) {
	$(element).classList.toggle(className);
}

function addClass(element, className) {
	$(element).className = className;
}

function getCurrentTheme() {
	return localStorage.getItem('theme') || 'theme-dark';
}

function activateSavedTheme() {
	addClass('body', getCurrentTheme());
}

function saveCurrentTheme() {
	localStorage.setItem('theme', $('body').className || 'theme-dark');
}

function toggleTheme() {

	toggleClass('body', 'theme-dark');
	toggleClass('body', 'theme-light');

	saveCurrentTheme();

}

onDocumentReady(() => {

	activateSavedTheme();

	$('[data-toggle-theme]').addEventListener('click', () => {
		toggleTheme();
	});

});
