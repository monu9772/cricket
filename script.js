// Telegram Join Button Tracking

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".join-btn");

  buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

      if (typeof fbq !== "undefined") {
        fbq("track", "Lead");
      }

    });

  });

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

  });
});

// Button Animation

setInterval(() => {

  document.querySelectorAll(".join-btn").forEach(btn => {

    btn.classList.toggle("pulse");

  });

},1500);
