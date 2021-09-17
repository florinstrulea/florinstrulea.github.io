const checkbox = document.querySelector("#checkbox");
const body = document.querySelector("body");
const label = document.querySelector(".label");
const button = document.querySelector(".switch");
const cv = document.querySelector(".cv");

checkbox.addEventListener("click", () => {
	body.classList.toggle("light");
	label.classList.toggle("white");
	label.classList.toggle("black");
	button.classList.toggle("light");
	cv.classList.toggle("text-white");
});
