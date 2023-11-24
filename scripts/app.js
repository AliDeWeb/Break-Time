const $ = document;

const bodySelector = $.querySelector(`body`);

window.addEventListener(`load`, () => {
  if (JSON.parse(localStorage.darkTheme) === true) {
    $.documentElement.classList.add(`dark`);
  }
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
