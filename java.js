const date = new Date();
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const month = [
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
document.querySelector(".date h1").innerHTML = month[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();
let days = " ";

for (i = 1; i <= lastDay; i += 1) {
  days += `<div>${i}</div>`;
  monthDays.innerHTML = days;
}
  