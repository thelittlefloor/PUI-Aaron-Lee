//event listeners given to nav bar menu button to open the nav bar
//event listener given to area-nav bar to close the nav bar

window.addEventListener("load", () => {
	document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector(".nav");

	document.querySelector("#btnNav").addEventListener("click", () => {
		nav.classList.add("nav--open");
	});

	document.querySelector(".nav__overlay").addEventListener("click", () => {
		nav.classList.remove("nav--open");
	});
});