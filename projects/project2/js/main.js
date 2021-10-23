//animation du navbar

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	if (window.scrollY > 10) {
		nav.classList.remove("invisible");
	}
	if (window.scrollY < 10) {
		nav.classList.add("invisible");
	}
});
//selection des buttons et du texte
let selects = document.querySelectorAll(".bt--select");
let titles = document.querySelectorAll(".titles");
let resultat = document.querySelector(".result__type");
let selects1 = Array.from(selects);
let titles1 = Array.from(titles);
for (let i = 0; i < selects1.length; i++) {
	selects[i].addEventListener("click", (e) => {
		resultat.textContent = titles1[i].textContent;
	});
}

let energisante = document.querySelector(".energisante");
let desalterante = document.querySelector(".desalterante");
let modify1 = document.querySelector("#modify--1");
let modify2 = document.querySelector("#modify--2");
let modify3 = document.querySelector("#modify--3");

let selection1;
let selection2;
let selection3;

for (let select of selects1) {
	if (select.id == "bt--select1") {
		selection1 = select;
	} else if (select.id == "bt--select2") {
		selection2 = select;
	} else if (select.id == "bt--select3") {
		selection3 = select;
	}
}
//J'ai ajouté un eventlistener sur le button energisante
energisante.addEventListener("click", (e) => {
	if ((e.target = e.currentTarget)) {
		modify3.textContent = "Non disponible, Modifiez votre selection pour modifier cette recette.";
		modify1.textContent = "Boisson energisante gaseuse à la taurine et chargée en cafeine";
		modify2.textContent = "Boisson energisante gaseuse, saveur mojito à la caffeine et sans alcool";
		selection3.disabled = true;
		selection1.disabled = false;
		selection2.disabled = false;
	}
});
//J'ai ajouté un eventlistener sur le button desalaterante
desalterante.addEventListener("click", (e) => {
	if ((e.target = e.currentTarget)) {
		modify1.textContent = "Non disponible, Modifiez votre selection pour modifier cette recette.";
		modify2.textContent = "Non disponible, Modifiez votre selection pour modifier cette recette.";
		modify3.textContent =
			"Boissons energisante gaseuse, aux fruits, taurine, caffeine et extrait de gingembre";
		selection3.disabled = false;
		selection1.disabled = true;
		selection2.disabled = true;
	}
});

// Chargement et lecture de la vidéo
let video = document.querySelector("video");
let videoSource = document.querySelector("video source");
let url = videoSource.dataset.src;

videoSource.setAttribute("src", url);
video.load();
video.play();
