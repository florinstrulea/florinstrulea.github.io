const body = document.querySelector("body");

const label = document.querySelector(".label");
const button = document.querySelector(".switch");
const cv = document.querySelector(".cv");
const projects = document.querySelectorAll(".project");
const french = document.querySelector("#french");
const english = document.querySelector("#english");
const selectors = document.querySelectorAll(
	"#greeting, #job, #about-me-title, #my-projects, #about-me-text, #toolbox, #loading, #freetime, #home, .all-projects, #title, .project-text, #page-title, #description, .btn-project, .btn-project-go"
);

if (window.location.href.indexOf("pages") === -1) {
	document.querySelector("#checkbox").addEventListener("click", () => {
		body.classList.toggle("light");
		label.classList.toggle("white");
		label.classList.toggle("black");
		button.classList.toggle("light");
		cv.classList.toggle("white-text");
		for (let project of projects) {
			project.classList.toggle("box-shadow-dark");
		}
	});
}

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
