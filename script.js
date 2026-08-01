// Join Button Tracking

const joinBtn = document.querySelector(".join-btn");

joinBtn.addEventListener("click", function () {

  fbq('track', 'Lead');

  setTimeout(function () {
    window.location.href = "https://t.me/+9qy16u2uzVgyYTU1";
  }, 200);

});
