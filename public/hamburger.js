const button = document.getElementById("hamburger-toggle");
const nav = document.getElementById("mobile-nav");

button.addEventListener("click", () => {
	nav.classList.toggle("active");
	button.classList.toggle("active");
});
