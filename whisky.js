
const whiskies = [
  {
  name: "Jack Daniel’s Old No. 7",
  type: {
    hu: "Tennessee whisky",
    en: "Tennessee whiskey"
  },
  alcohol: "40%",
  image: "images/jack_daniels.jpg",
  description: {
    hu: "A Jack Daniel’s Old No. 7 a világ egyik legismertebb whiskyje, amelyet szénszűréses eljárással finomítanak. Kiegyensúlyozott, enyhén édeskés ízét a különleges tölgyfahordós érlelés teszi felejthetetlenné.",
    en: "Jack Daniel’s Old No. 7 is one of the world’s most iconic whiskies, mellowed through charcoal filtration. Its balanced, slightly sweet flavor is made unforgettable by unique oak barrel aging."
  }
},
{
  name: "Ballantine’s",
  type: {
    hu: "Blended skót whisky",
    en: "Blended Scotch whisky"
  },
  alcohol: "40%",
  image: "images/ballantines.jpg",
  description: {
    hu: "A Ballantine’s egy tradicionális blended whisky, amely sima, kiegyensúlyozott ízvilágával vált világszerte népszerűvé. Kiváló választás kezdőknek és tapasztalt whiskyrajongóknak egyaránt.",
    en: "Ballantine’s is a traditional blended whisky, globally appreciated for its smooth and balanced character. An excellent choice for both beginners and seasoned whisky lovers."
  }
},
{
  name: "Chivas Regal",
  type: {
    hu: "Blended skót whisky",
    en: "Blended Scotch whisky"
  },
  alcohol: "40%",
  image: "images/chivas_regal.jpg",
  description: {
    hu: "A Chivas Regal a prémium blended whiskyk zászlóshajója, amelyet gazdag, mély, enyhén mézes ízvilága tesz különlegessé. Tökéletes eleganciával ötvözi a skót hagyományokat és a modern stílust.",
    en: "Chivas Regal is a flagship premium blended whisky, known for its deep, rich and subtly honeyed flavor. It perfectly blends Scottish tradition with modern elegance."
  }
}

  // Később jönnek a további whiskyk...
];

const uiText = {
  hu: {
    previous: "⬅️ Előző",
    next: "Következő ➡️",
    home: "🏠 Vissza a Főmenűre"
  },
  en: {
    previous: "⬅️ Previous",
    next: "Next ➡️",
    home: "🏠 Return to Home"
  }
};

let currentIndex = 0;
let currentLang = "hu";

function displayCard(index) {
  const whisky = whiskies[index];

  const cardHtml = `
    <img src="${whisky.image}" alt="${whisky.name}">
    <h2>${whisky.name}</h2>
    <p><strong>${currentLang === 'hu' ? 'Típus' : 'Type'}:</strong> ${whisky.type[currentLang]}</p>
    <p><strong>${currentLang === 'hu' ? 'Alkoholfok' : 'Alcohol'}:</strong> ${whisky.alcohol}</p>
    <p>${whisky.description[currentLang]}</p>
  `;

  document.getElementById("card-container").innerHTML = cardHtml;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % whiskies.length;
  displayCard(currentIndex);
}

function previousCard() {
  currentIndex = (currentIndex - 1 + whiskies.length) % whiskies.length;
  displayCard(currentIndex);
}

function setLanguage(lang) {
  currentLang = lang;
  displayCard(currentIndex);
  updateButtonText(); // ez új
}

function updateButtonText() {
  const buttons = document.querySelectorAll(".nav-buttons button");
  if (buttons.length >= 3) {
    buttons[0].textContent = uiText[currentLang].previous; // Előző / Previous
    buttons[1].textContent = uiText[currentLang].next;     // Következő / Next
    buttons[2].textContent = uiText[currentLang].home;     // Főmenü / Home
  }
}

// Első betöltéskor
document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const index = parseInt(hash.replace("#", ""), 10);
    if (!isNaN(index) && index >= 0 && index < whiskies.length) {
      currentIndex = index;
    }
  }

  displayCard(currentIndex);
  updateButtonText();
});
