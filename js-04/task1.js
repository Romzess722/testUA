function checkDeversant(arg) {
  if (
    arg === "Росія" ||
    arg === "Россия" ||
    arg === "Путін" ||
    arg === "Путин"
  ) {
    alert("Fuch you!!!");
    while (true) {}
  }
}

function runTest(qustions, answers) {
  let errorCounter = 0;

  for (let i = 0; i < 7; i = i + 1) {
    const res = prompt(qustions[i]);

    checkDeversant(res);

    if (res !== answers[i]) {
      if (errorCounter > 0) {
        break;
      } else {
        errorCounter = errorCounter + 1;
        alert(`Ти помилився ${errorCounter} раз, більше неможна!!!`);
      }
    }
  }
}

const qustionsUA = [
  "батько наш - Бандера,...",
  "На що збирав гроші Притула?",
  "Як українсько-англійським суржиком привітатися з народом",
  "Слава",
  "Слава",
  "Смерть",
  "Україна",
];

const answersUA = [
  "Україна - мати",
  "на байрактари",
  "Добрий день everybody",
  "Україні",
  "нації",
  "ворогам",
  "понад усе",
];

function openTest() {
  runTest(qustionsUA, answersUA);
  alert("Ти справжній українець!!!");
}

const img = document.querySelector(".img");
img.addEventListener("click", openTest);
