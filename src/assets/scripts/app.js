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
	element.classList.toggle(className);
}

onDocumentReady(() => {

	$('[data-toggle-theme]').addEventListener('click', function() {
		toggleClass($('body'), 'theme-dark');
	});

});
