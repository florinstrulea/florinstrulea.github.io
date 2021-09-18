const checkbox = document.querySelector("#checkbox");
const body = document.querySelector("body");
const label = document.querySelector(".label");
const button = document.querySelector(".switch");
const cv = document.querySelector(".cv");
const projects = document.querySelectorAll(".project");
const french = document.querySelector("#french");
const english = document.querySelector("#english");
const selectors = document.querySelectorAll(
	"#greeting, #job, #about-me-title, #my-projects, #about-me-text, #toolbox, #loading"
);

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

french.addEventListener("click", () => {
	for (let select of selectors) {
		select.textContent = select.dataset.fr;
	}
});
english.addEventListener("click", () => {
	for (let select of selectors) {
		select.textContent = select.dataset.en;
	}
});
