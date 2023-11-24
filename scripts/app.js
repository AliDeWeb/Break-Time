import { months, days } from "./dates.js";

const $ = document;

const bodySelector = $.querySelector(`body`);

const hourSelector = $.getElementById(`hour`);
const minuteSelector = $.getElementById(`minute`);
const secondSelector = $.getElementById(`second`);
const yearSelector = $.getElementById(`year`);
const monthSelector = $.getElementById(`month`);
const daySelector = $.getElementById(`day`);

let date;

window.addEventListener(`load`, () => {
  if (!localStorage.darkTheme) {
    localStorage.setItem(`darkTheme`, JSON.stringify(false));
  }

  if (JSON.parse(localStorage.darkTheme) === true) {
    $.documentElement.classList.add(`dark`);
  }

  setInterval(() => {
    function checkHourLength() {
      if (date.getHours() < 10) {
        return `0${date.getHours()}`;
      } else {
        return date.getHours();
      }
    }
    function checkMinuteLength() {
      if (date.getMinutes() < 10) {
        return `0${date.getMinutes()}`;
      } else {
        return date.getMinutes();
      }
    }
    function checkSecondLength() {
      if (date.getSeconds() < 10) {
        return `0${date.getSeconds()}`;
      } else {
        return date.getSeconds();
      }
    }
    date = new Date();
    hourSelector.innerHTML = checkHourLength();
    minuteSelector.innerHTML = checkMinuteLength();
    secondSelector.innerHTML = checkSecondLength();
    yearSelector.innerHTML = date.getFullYear();
    monthSelector.innerHTML = months[date.getMonth()];
    daySelector.innerHTML = days[date.getDay()];
  }, 1000);
});

// light && dark mode handler
bodySelector.addEventListener(`click`, (e) => {
  if (
    e.target.classList.contains(`h-screen`) ||
    e.target.classList.contains(`container`)
  ) {
    $.documentElement.classList.toggle(`dark`);
    if ($.documentElement.classList.contains(`dark`)) {
      localStorage.darkTheme = JSON.stringify(true);
    } else {
      localStorage.darkTheme = JSON.stringify(false);
    }
  }
});
