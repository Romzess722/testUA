const img = document.querySelector(".img");
img.addEventListener("click", test);

function test() {
  const qustion = [
    "батько наш - Бандера,...",
    "На що збирав гроші Притула?",
    "Як українсько-англійським суржиком привітатися з народом",
    "Слава",
    "Слава",
    "Смерть",
    "Україна",
  ];

  const answers = [
    "Україна - мати",
    "на байрактари",
    "Добрий день everybody",
    "Україні",
    "нації",
    "ворогам",
    "понад усе!",
  ];
  let errorCounter = 0;

  for (let i = 0; i < 7; i = i + 1) {
    const res = prompt(qustion[i]);

    if (
      res === "Росія" ||
      res === "Россия" ||
      res === "Путін" ||
      res === "Путин"
    ) {
      alert("Fuch you!!!");
      while (true) {}
    }

    if (res !== answers[i]) {
      if (errorCounter > 0) {
        alert("Тест не пройденно!!!");
        break;
      }
      errorCounter = errorCounter + 1;
      alert(`У тебе ${errorCounter} помилка, помилятись більше не можна!!!`);
    }
  }

  if (errorCounter === 0) {
    alert("Ти справжній українець");
  }
}
