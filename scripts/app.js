const $ = document;

const bodySelector = $.querySelector(`body`);

bodySelector.addEventListener(`click`, (e) => {
  if (
    e.target.classList.contains(`h-screen`) ||
    e.target.classList.contains(`container`)
  ) {
    $.documentElement.classList.toggle(`dark`);
    console.log(e.target);
  }
});
