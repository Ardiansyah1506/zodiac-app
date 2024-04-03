const zodiacSign = sessionStorage.getItem("zodiacSign");
const zodiacDate = sessionStorage.getItem("zodiacDate");
const personal = sessionStorage.getItem("personal");
const future = sessionStorage.getItem("future");
const datebirth = sessionStorage.getItem("date");
if (!zodiacSign) {
  location.href = "./index.html";
}
document.title = `Your Zodiac - ${zodiacSign}`;

const signElements = document.querySelectorAll(".sign");
const Personality = document.querySelectorAll(".personal");
const futureSign = document.querySelectorAll(".future");
const dateZodiac = document.querySelectorAll(".zodiac-date");
const date = document.querySelector(".date-birth");
const imageElement = document.querySelector("img");
imageElement.src = `../icons/${zodiacSign}.svg`;
imageElement.alt = zodiacSign;


signElements.forEach(sign => {
  sign.innerHTML = zodiacSign;
});
futureSign.forEach(f => {
  f.innerHTML = future;
});
Personality.forEach(f => {
  f.innerHTML = personal;
});

date.innerHTML = datebirth;

dateZodiac.forEach(f => {
  f.innerHTML = zodiacDate;
});
