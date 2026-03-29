const mag1 = document.querySelector('a[onclick*="river1"]');
const mag2 = document.querySelector('a[onclick*="river2"]');
const mag3 = document.querySelector('a[onclick*="river3"]');
var dipnet = document.getElementById("dipnet");

if (mag1) {
  mag1.addEventListener('click', function () {
    document.body.style.backgroundImage = "url('river1Background.png')";
  });
}
if (mag2) {
  mag2.addEventListener('click', function () {
    document.body.style.backgroundImage = "url('river2Background.png')";
  });
}
if (mag3) {
  mag3.addEventListener('click', function () {
    document.body.style.backgroundImage = "url('river3Background.png')";
  });
}

function swingNet(currentRiverId, catchId) {
  dipnet.classList.add("animate");
  setTimeout(() => {
    if (typeof show === "function") {
        show(catchId, currentRiverId);
    }
    dipnet.classList.remove("animate");
    document.body.style.backgroundImage = "url('dipnettingBackground.png')";
  }, 1000);
}

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) { }
  dipnet.style.left = x - 50 + "px";
  dipnet.style.top = y - 50 + "px";
};
document.addEventListener("mousemove", (e) => {
  move(e);
});
document.addEventListener("touchmove", (e) => {
  move(e);
});