const timeStamp = document.querySelector(".chat__timestamp");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

const day = days[new Date().getDay()];
const month = months[new Date().getMonth()];
const date = new Date().getDate();
const year = new Date().getFullYear();

const timeStampText = `${day}, ${month} ${date}, ${year}`;
timeStamp.innerText = timeStampText;
