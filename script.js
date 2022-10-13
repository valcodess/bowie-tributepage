const time = 500;
 
window.addEventListener("scroll", () => {
  const scroll1 = window.pageYOffset;
  if (scroll1 <= time) {
    opacity = 0 - scroll1 / time;
  } else {
    opacity = 1;
  }
  document.querySelector(".fadetext1").style.opacity = opacity;
  
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}