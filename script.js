const time = 500;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= time) {
      opacity = 1 - currentScroll / time;
    } else {
      opacity = 0;
    }
    document.querySelector('.fadetext1').style.opacity = opacity;
  });