const checkbox = document.querySelector("#checkbox");
const body = document.querySelector("body");
const label = document.querySelector(".label");
const button = document.querySelector(".switch");
const cv = document.querySelector(".cv");
const projects = document.querySelectorAll(".project");

checkbox.addEventListener("click", () => {
	body.classList.toggle("light");
	label.classList.toggle("white");
	label.classList.toggle("black");
	button.classList.toggle("light");
	cv.classList.toggle("text-white");
	for (let project of projects) {
		project.classList.toggle("box-shadow-dark");
	}
});
