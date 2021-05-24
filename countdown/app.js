"use strict";
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const h4s = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 4, 30, 11, 30, 0);
//Months and days are 0-indexed, so 4 is actually may.

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let day = futureDate.getDay();
let month = futureDate.getMonth();

month = months[month]; //Sets month equal to the corresponding value in the array.
day = weekdays[day];

giveAway.textContent = `Giveaway ends on ${day}, ${month} ${date} ${year} - ${hours}:${minutes}am.`;

//getTime()represents the Future time in milliseconds
const futureTimeInMilliseconds = futureDate.getTime();

function getRemainingTime(){
  const todayInMilliseconds = new Date().getTime();
  const timeLeft = futureTimeInMilliseconds - todayInMilliseconds;
  console.log(timeLeft);
  //1s = 1000ms
  //1m = 60s
  //1hr = 60 min
  //1d = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSecond = 1000;

  let daysRemaining = Math.floor(timeLeft / oneDay);
  
  let hoursRemaining = Math.floor((timeLeft % oneDay) / oneHour);
  let minutesRemaining = Math.floor((timeLeft % oneHour) / oneMin);
  let secondsRemaining = Math.floor((timeLeft % oneMin) / oneSecond);

  const values = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining];
  h4s.forEach(function(h4, index){
    h4.innerHTML = values[index];
  });

  if(timeLeft < 0){
    clearInterval(countdown); //Stops the interval.
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has ended.</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();