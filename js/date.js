const timeStamp = document.querySelector(".chat__timestamp");
const JHTimeStamp = document.querySelectorAll(".message__time");

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
const hour = String(new Date().getHours()).padStart(2, "0");
const minute = String(new Date().getMinutes()).padStart(2, "0");

const timeStampText = `${day}, ${month} ${date}, ${year}`;
timeStamp.innerText = timeStampText;

JHTimeStamp[0].innerText = JHTimeStamp[1].innerText = `${hour}:${minute}`;
