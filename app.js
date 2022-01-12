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

function handleDayClick(i) {
  const eventText = prompt("Enter event");
  const event = { id: i, day: i, month: currentMon, text: eventText };
  dateEvents.push(event);
  console.log(dateEvents);
  if (eventText === null || eventText.length === 0) return;
  let clickDay = document.getElementById(i);
  let dayText = `<span>${eventText}</span>`;

  clickDay.innerHTML += dayText;
}

console.log(dateEvents);
