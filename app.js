const date = new Date();
const monthDays = document.querySelector(".calendar__days");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var dateEvents = [];
let currentMon = months[date.getMonth()];
document.querySelector(".current__month h2").innerHTML = currentMon;
document.querySelector(".current__month p").innerHTML = date.toDateString();
let days = "";
function renderDays() {
  for (let i = 1; i <= 31; i++) {
    days += `<div class="day" id=${i} onclick=handleDayClick(${i})><span>${i} </span></div>`;
    monthDays.innerHTML = days;
  }
}
renderDays();

let eventTextDetails = document.getElementById("details");
let eventTextInput = document.getElementById("event__input");
let eventTextInputBtn = document.getElementById("add__event__btn");
let eventDetailsList = document.getElementById("details__events");
let eventDetailsListCloseBtn = document.getElementById("close__btn");

let currentDay = 1;

eventDetailsListCloseBtn.addEventListener("click", () => {
  eventTextDetails.style.display = "none";
});

eventTextInputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const eventText = eventTextInput.value;
  const event = {
    id: currentDay,
    day: currentDay,
    month: currentMon,
    text: eventText,
  };
  dateEvents.push(event);
  console.log(dateEvents);
  if (eventText === null || eventText.length === 0) return;
  // let clickDay = document.getElementById(currentDay);
  // let dayText = `<span>${eventText}</span>`;

  // clickDay.innerHTML += dayText;

  eventTextInput.value = "";
  eventDetailsList.innerHTML = "";
  renderEventList();
});

const renderEventList = () => {
  dateEvents.map((event, i) => {
    listEvents = `<li>${event.text}</li>`;
    eventDetailsList.innerHTML += listEvents;
  });
};

function handleDayClick(i) {
  eventTextDetails.style.display = "block";
  currentDay = i;
}

console.log(dateEvents);
