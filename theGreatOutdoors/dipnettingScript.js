const mag1 = document.querySelector('a[onclick*="river1"]');
const mag2 = document.querySelector('a[onclick*="river2"]');
const mag3 = document.querySelector('a[onclick*="river3"]');

var dipnet1 = document.getElementById("dipnet1");
var dipnet2 = document.getElementById("dipnet2");
var dipnet3 = document.getElementById("dipnet3");

var river1Leaf1 = document.getElementById("river1Leaf1");
var river1Leaf2 = document.getElementById("river1Leaf2");
var river1Leaf3 = document.getElementById("river1Leaf3");
var river1Leaf4 = document.getElementById("river1Leaf4");

var river2Leaf1 = document.getElementById("river2Leaf1");
var river2Leaf2 = document.getElementById("river2Leaf2");
var river2Leaf3 = document.getElementById("river2Leaf3");
var river2Leaf4 = document.getElementById("river2Leaf4");

var river3Leaf1 = document.getElementById("river3Leaf1");
var river3Leaf2 = document.getElementById("river3Leaf2");
var river3Leaf3 = document.getElementById("river3Leaf3");
var river3Leaf4 = document.getElementById("river3Leaf4");

const leaf1x = Math.random() * (0.5 - 0.1) + 0.1
const leaf2x = Math.random() * (0.5 - 0.1) + 0.1
const leaf3x = Math.random() * (0.5 - 0.1) + 0.1
const leaf4x = Math.random() * (0.5 - 0.1) + 0.1
const leaf1y = Math.random() * (0.4 - 0.1) + 0.1
const leaf2y = Math.random() * (0.4 - 0.1) + 0.1
const leaf3y = Math.random() * (0.4 - 0.1) + 0.1
const leaf4y = Math.random() * (0.4 - 0.1) + 0.1

var river1Catch = document.getElementById("river1Catch");
var river2Catch = document.getElementById("river2Catch");
var river3Catch = document.getElementById("river3Catch");
var pickCatch = 0;
var numOfLeaves = 4; 
var currentRiver = 0;

if (mag1) {
  mag1.addEventListener('click', function () {
    currentRiver = 1;
    document.body.style.backgroundImage = "url('river1Background.png')";
    pickCatch = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (pickCatch === 1) {
      river1Catch.style.width = 449 + "px"; 
      river1Catch.style.height = 337 + "px";
      river1Catch.style.backgroundImage = "url('paintedhandMudbug.png')";
    }
    else if (2 <= pickCatch && pickCatch <= 4) {
      river1Catch.style.width = 448 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('calicoCrayfish.png')";
    }
    else if (5 <= pickCatch && pickCatch <= 9) {
      river1Catch.style.width = 252 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('bigWaterCrayfish.png')";
    }
    else if (10 <= pickCatch && pickCatch <= 14) {
      river1Catch.style.width = 449 + "px"; 
      river1Catch.style.height = 337 + "px";
      river1Catch.style.backgroundImage = "url('fatheadMinnow.png')";
    }
    else if (15 <= pickCatch && pickCatch <= 19) {
      river1Catch.style.width = 506 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('centralStoneroller.png')";
    }
    else if (20 <= pickCatch && pickCatch <= 29) {
      river1Catch.style.width = 252 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('virileCrayfish.png')";
    }
    else if (30 <= pickCatch && pickCatch <= 39) {
      river1Catch.style.width = 252 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('riverChub.png')";
    }
    else if (40 <= pickCatch && pickCatch <= 49) {
      river1Catch.style.width = 693 + "px"; 
      river1Catch.style.height = 337 + "px";
      river1Catch.style.backgroundImage = "url('goldenShiner.png')";
    }
    else if (50 <= pickCatch && pickCatch <= 69) {
      river1Catch.style.width = 253 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('northernClearwaterCrayfish.png')";
    }
    else {
      river1Catch.style.width = 252 + "px"; 
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('commonShiner.png')";
    }
  });
}
if (mag2) {
  mag2.addEventListener('click', function () {
    currentRiver = 2;
    document.body.style.backgroundImage = "url('river2Background.png')";
    pickCatch = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if(pickCatch === 1){
      console.log("Redside Dace");
    }
    else if(2 <= pickCatch && pickCatch <= 4){
      console.log("Northern Pearl Dace");
    }
    else if(5 <= pickCatch && pickCatch <= 9){
      console.log("Common Log Perch");
    }
    else if(10 <= pickCatch && pickCatch <= 14){
      console.log("Greenside Darter");
    }
    else if(15 <= pickCatch && pickCatch <= 20){
      console.log("Iowa Darter");
    }
    else if(21 <= pickCatch && pickCatch <= 30){
      console.log("Rainbow Darter");
    }
    else if(31 <= pickCatch && pickCatch <= 40){
      console.log("Johnny Darter");
    }
    else if(41 <= pickCatch && pickCatch <= 60){
      console.log("Fantail Darter");
    }
    else if(61 <= pickCatch && pickCatch <= 80){
      console.log("Blacknose Dace");
    }
    else{
      console.log("Longnose Dace");
    }
  });
}
if (mag3) {
  mag3.addEventListener('click', function () {
    currentRiver = 3;
    document.body.style.backgroundImage = "url('river3Background.png')";
    pickCatch = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if(pickCatch === 1){
      console.log("Brindled Madtom");
    }
    else if(2 <= pickCatch && pickCatch <= 4){
      console.log("Moltted Sculpin");
    }
    else if(5 <= pickCatch && pickCatch <= 7){
      console.log("Brook Silverside");
    }
    else if(8 <= pickCatch && pickCatch <= 11){
      console.log("Brook Stickleback");
    }
    else if(12 <= pickCatch && pickCatch <= 18){
      console.log("Banded Killifish");
    }
    else if(19 <= pickCatch && pickCatch <= 28){
      console.log("Central Mudminnow");
    }
    else if(29 <= pickCatch && pickCatch <= 40){
      console.log("Slimey Sculpin");
    }
    else if(41 <= pickCatch && pickCatch <= 55){
      console.log("Black Striped Topminnow"); 
    }
    else if(56 <= pickCatch && pickCatch <= 75){
      console.log("Tadpole Madtom");
    }
    else{
      console.log("Stonecat");
    }
  });
}

function swingNet1(currentRiverId, catchId) {
  dipnet1.classList.add("animate");
  setTimeout(() => {
    if (typeof show === "function") {
      show(catchId, currentRiverId);
    }
    dipnet1.classList.remove("animate");
    document.body.style.backgroundImage = "url('dipnettingBackground.png')";
  }, 1000);
}

function swingNet2(currentRiverId, catchId) {
  dipnet2.classList.add("animate");
  setTimeout(() => {
    if (typeof show === "function") {
      show(catchId, currentRiverId);
    }
    dipnet2.classList.remove("animate");
    document.body.style.backgroundImage = "url('dipnettingBackground.png')";
  }, 1000);
}

function swingNet3(currentRiverId, catchId) {
  dipnet3.classList.add("animate");
  setTimeout(() => {
    if (typeof show === "function") {
      show(catchId, currentRiverId);
    }
    dipnet3.classList.remove("animate");
    document.body.style.backgroundImage = "url('dipnettingBackground.png')";
  }, 1000);
}

function hideLeaf1() {
  river1Leaf1.style.display = "none";
  river2Leaf1.style.display = "none";
  river3Leaf1.style.display = "none";
  numOfLeaves -= 1; 
  if(numOfLeaves == 0 && currentRiver == 1){
    river1Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 2){
    river2Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 3){
    river3Catch.style.display = "block";
  }
}
function hideLeaf2() {
  river1Leaf2.style.display = "none";
  river2Leaf2.style.display = "none";
  river3Leaf2.style.display = "none";
  numOfLeaves -= 1; 
  if(numOfLeaves == 0 && currentRiver == 1){
    river1Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 2){
    river2Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 3){
    river3Catch.style.display = "block";
  }
}
function hideLeaf3() {
  river1Leaf3.style.display = "none";
  river2Leaf3.style.display = "none";
  river3Leaf3.style.display = "none";
  numOfLeaves -= 1; 
  if(numOfLeaves == 0 && currentRiver == 1){
    river1Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 2){
    river2Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 3){
    river3Catch.style.display = "block";
  }
}
function hideLeaf4() {
  river1Leaf4.style.display = "none";
  river2Leaf4.style.display = "none";
  river3Leaf4.style.display = "none";
  numOfLeaves -= 1; 
  if(numOfLeaves == 0 && currentRiver == 1){
    river1Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 2){
    river2Catch.style.display = "block";
  }
  if(numOfLeaves == 0 && currentRiver == 3){
    river3Catch.style.display = "block";
  }
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
  dipnet1.style.left = x - 50 + "px";
  dipnet1.style.top = y - 50 + "px";
  dipnet2.style.left = x - 50 + "px";
  dipnet2.style.top = y - 50 + "px";
  dipnet3.style.left = x - 50 + "px";
  dipnet3.style.top = y - 50 + "px";
};
document.addEventListener("mousemove", (e) => {
  move(e);
});
document.addEventListener("touchmove", (e) => {
  move(e);
});

river1Leaf1.style.left = (leaf1x * 100) + "%";
river2Leaf1.style.left = (leaf1x * 100) + "%";
river3Leaf1.style.left = (leaf1x * 100) + "%";
river1Leaf1.style.top = (leaf1y * 100) + "%";
river2Leaf1.style.top = (leaf1y * 100) + "%";
river3Leaf1.style.top = (leaf1y * 100) + "%";

river1Leaf2.style.left = (leaf2x * 100) + "%";
river2Leaf2.style.left = (leaf2x * 100) + "%";
river3Leaf2.style.left = (leaf2x * 100) + "%";
river1Leaf2.style.top = (leaf2y * 100) + "%";
river2Leaf2.style.top = (leaf2y * 100) + "%";
river3Leaf2.style.top = (leaf2y * 100) + "%";

river1Leaf3.style.left = (leaf3x * 100) + "%";
river2Leaf3.style.left = (leaf3x * 100) + "%";
river3Leaf3.style.left = (leaf3x * 100) + "%";
river1Leaf3.style.top = (leaf3y * 100) + "%";
river2Leaf3.style.top = (leaf3y * 100) + "%";
river3Leaf3.style.top = (leaf3y * 100) + "%";

river1Leaf4.style.left = (leaf4x * 100) + "%";
river2Leaf4.style.left = (leaf4x * 100) + "%";
river3Leaf4.style.left = (leaf4x * 100) + "%";
river1Leaf4.style.top = (leaf4y * 100) + "%";
river2Leaf4.style.top = (leaf4y * 100) + "%";
river3Leaf4.style.top = (leaf4y * 100) + "%";