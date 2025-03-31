const toggle = document.getElementById("theme-toggle");
const thumb = toggle.querySelector(".toggle-thumb");
const icon = toggle.querySelector(".toggle-icon");
const root = document.documentElement;

function setTheme(mode) {
	root.setAttribute("data-theme", mode);
	localStorage.setItem("theme", mode);
	updateToggle(mode);
}

function toggleTheme() {
	const current = root.getAttribute("data-theme");
	const newTheme = current === "dark" ? "light" : "dark";
	setTheme(newTheme);
}

function updateToggle(mode) {
	const sun = document.querySelector(".toggle-icon.sun");
	const moon = document.querySelector(".toggle-icon.moon");

	if (mode === "dark") {
		// icon.textContent = "🌙";
		sun.classList.remove("active");
		moon.classList.add("active");
		thumb.style.left = "31px";
	} else {
		// icon.textContent = "🌞";
		moon.classList.remove("active");
		sun.classList.add("active");
		thumb.style.left = "3px";
	}
}

toggle.addEventListener("click", toggleTheme);

// On load: use saved theme or fallback to system
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const activeTheme = saved || (prefersDark ? "dark" : "light");
setTheme(activeTheme);