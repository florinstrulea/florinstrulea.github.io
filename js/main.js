const checkbox = document.querySelector("#checkbox");
const body = document.querySelector("body");
const label = document.querySelector(".label");
const button = document.querySelector(".switch");

checkbox.addEventListener("click", () => {
	body.classList.toggle("dark");
	label.classList.toggle("white");
	label.classList.toggle("black");
	button.classList.toggle("dark");

	// button.classList.toggle("black");
	// label.classList.toggle("white");
});
