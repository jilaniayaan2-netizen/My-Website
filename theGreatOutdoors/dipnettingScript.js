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
var fishCaught = 0;

if (mag1) {
  mag1.addEventListener('click', function () {
    currentRiver = 1;
    document.body.style.backgroundImage = "url('river1Background.png')";
    pickCatch = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (pickCatch === 1 || pickCatch === 100) {
      river1Catch.style.width = 449 + "px";
      river1Catch.style.height = 337 + "px";
      river1Catch.style.backgroundImage = "url('paintedhandMudbug.png')";
      fishCaught = 1;
    }
    else if (2 <= pickCatch && pickCatch <= 4) {
      river1Catch.style.width = 448 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('calicoCrayfish.png')";
      fishCaught = 2;
    }
    else if (5 <= pickCatch && pickCatch <= 9) {
      river1Catch.style.width = 252 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('bigWaterCrayfish.png')";
      fishCaught = 3;
    }
    else if (10 <= pickCatch && pickCatch <= 14) {
      river1Catch.style.width = 224.5 + "px";
      river1Catch.style.height = 168.5 + "px";
      river1Catch.style.backgroundImage = "url('fatheadMinnow.png')";
      fishCaught = 4;
    }
    else if (15 <= pickCatch && pickCatch <= 19) {
      river1Catch.style.width = 506 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('centralStoneroller.png')";
      fishCaught = 5;
    }
    else if (20 <= pickCatch && pickCatch <= 29) {
      river1Catch.style.width = 252 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('virileCrayfish.png')";
      fishCaught = 6;
    }
    else if (30 <= pickCatch && pickCatch <= 39) {
      river1Catch.style.width = 252 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('riverChub.png')";
      fishCaught = 7;
    }
    else if (40 <= pickCatch && pickCatch <= 49) {
      river1Catch.style.width = 346.5 + "px";
      river1Catch.style.height = 168 + "px";
      river1Catch.style.bottom = 40 + "%";
      river1Catch.style.backgroundImage = "url('goldenShiner.png')";
      fishCaught = 8;
    }
    else if (50 <= pickCatch && pickCatch <= 69) {
      river1Catch.style.width = 253 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('northernClearwaterCrayfish.png')";
      fishCaught = 9;
    }
    else {
      river1Catch.style.width = 252 + "px";
      river1Catch.style.height = 336 + "px";
      river1Catch.style.backgroundImage = "url('commonShiner.png')";
      fishCaught = 10;
    }
  });
}
if (mag2) {
  mag2.addEventListener('click', function () {
    currentRiver = 2;
    document.body.style.backgroundImage = "url('river2Background.png')";
    pickCatch = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (pickCatch === 1 || pickCatch === 100) {
      river2Catch.style.width = 252.5 + "px";
      river2Catch.style.height = 168.5 + "px";
      river2Catch.style.backgroundImage = "url('redsideDace.png')";
      fishCaught = 11;
    }
    else if (2 <= pickCatch && pickCatch <= 4) {
      river2Catch.style.width = 442.5 + "px";
      river2Catch.style.height = 168 + "px";
      river2Catch.style.backgroundImage = "url('northernPearlDace.png')";
      fishCaught = 12;
    }
    else if (5 <= pickCatch && pickCatch <= 9) {
      river2Catch.style.width = 315.5 + "px";
      river2Catch.style.height = 168 + "px";
      river2Catch.style.backgroundImage = "url('commonLogperch.png')";
      fishCaught = 13;
    }
    else if (10 <= pickCatch && pickCatch <= 14) {
      river2Catch.style.width = 299 + "px";
      river2Catch.style.height = 168.5 + "px";
      river2Catch.style.backgroundImage = "url('greensideDarter.png')";
      fishCaught = 14;
    }
    else if (15 <= pickCatch && pickCatch <= 20) {
      river2Catch.style.width = 253 + "px";
      river2Catch.style.height = 168 + "px";
      river2Catch.style.backgroundImage = "url('iowaDarter.png')";
      fishCaught = 15;
    }
    else if (21 <= pickCatch && pickCatch <= 30) {
      river2Catch.style.width = 252 + "px";
      river2Catch.style.height = 336 + "px";
      river2Catch.style.backgroundImage = "url('rainbowDarter.png')";
      fishCaught = 16;
    }
    else if (31 <= pickCatch && pickCatch <= 40) {
      river2Catch.style.width = 252 + "px";
      river2Catch.style.height = 336 + "px";
      river2Catch.style.backgroundImage = "url('johnnyDarter.png')";
      fishCaught = 17;
    }
    else if (41 <= pickCatch && pickCatch <= 60) {
      river2Catch.style.width = 252 + "px";
      river2Catch.style.height = 336 + "px";
      river2Catch.style.backgroundImage = "url('fantailDarter.png')";
      fishCaught = 18;
    }
    else if (61 <= pickCatch && pickCatch <= 80) {
      river2Catch.style.width = 252 + "px";
      river2Catch.style.height = 336 + "px";
      river2Catch.style.backgroundImage = "url('westernBlacknoseDace.png')";
      fishCaught = 19;
    }
    else {
      river2Catch.style.width = 249.5 + "px";
      river2Catch.style.height = 168.5 + "px";
      river2Catch.style.backgroundImage = "url('longnoseDace.png')";
      fishCaught = 20;
    }
  });
}
if (mag3) {
  mag3.addEventListener('click', function () {
    currentRiver = 3;
    document.body.style.backgroundImage = "url('river3Background.png')";
    pickCatch = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (pickCatch === 1 || pickCatch === 100) {
      river3Catch.style.width = 299.5 + "px";
      river3Catch.style.height = 168.5 + "px";
      river3Catch.style.backgroundImage = "url('brindledMadtom.png')";
      fishCaught = 21;
    }
    else if (2 <= pickCatch && pickCatch <= 4) {
      river3Catch.style.width = 280.5 + "px";
      river3Catch.style.height = 168 + "px";
      river3Catch.style.backgroundImage = "url('mottledSculpin.png')";
      fishCaught = 22;
    }
    else if (5 <= pickCatch && pickCatch <= 8) {
      river3Catch.style.width = 288.5 + "px";
      river3Catch.style.height = 84 + "px";
      river3Catch.style.backgroundImage = "url('brookSilverside.png')";
      fishCaught = 23;
    }
    else if (9 <= pickCatch && pickCatch <= 15) {
      river3Catch.style.width = 253 + "px";
      river3Catch.style.height = 336 + "px";
      river3Catch.style.backgroundImage = "url('brookStickleback.png')";
      fishCaught = 24;
    }
    else if (16 <= pickCatch && pickCatch <= 22) {
      river3Catch.style.width = 224.5 + "px";
      river3Catch.style.height = 168.5 + "px";
      river3Catch.style.backgroundImage = "url('bandedKillifish.png')";
      fishCaught = 25;
    }
    else if (23 <= pickCatch && pickCatch <= 32) {
      river3Catch.style.width = 299.5 + "px";
      river3Catch.style.height = 168 + "px";
      river3Catch.style.backgroundImage = "url('centralMudminnow.png')";
      fishCaught = 26;
    }
    else if (33 <= pickCatch && pickCatch <= 47) {
      river3Catch.style.width = 253 + "px";
      river3Catch.style.height = 168 + "px";
      river3Catch.style.backgroundImage = "url('slimySculpin.png')";
      fishCaught = 27;
    }
    else if (48 <= pickCatch && pickCatch <= 62) {
      river3Catch.style.width = 253 + "px";
      river3Catch.style.height = 168 + "px";
      river3Catch.style.backgroundImage = "url('blackstripeTopminnow.png')";
      fishCaught = 28;
    }
    else if (63 <= pickCatch && pickCatch <= 77) {
      river3Catch.style.width = 224.5 + "px";
      river3Catch.style.height = 168.5 + "px";
      river3Catch.style.backgroundImage = "url('tadpoleMadtom.png')";
      fishCaught = 29;
    }
    else {
      river3Catch.style.width = 253 + "px";
      river3Catch.style.height = 336 + "px";
      river3Catch.style.backgroundImage = "url('stonecat.png')";
      fishCaught = 30;
    }
  });
}

function infoAboutFish() {
  switch (fishCaught) {
    case 1:
      document.getElementById("paintedhandMudbug").style.display = "block";
      break;
    case 2:
      document.getElementById("calicoCrayfish").style.display = "block";
      break;
    case 3:
      document.getElementById("bigWaterCrayfish").style.display = "block";
      break;
    case 4:
      document.getElementById("fatheadMinnow").style.display = "block";
      break;
    case 5:
      document.getElementById("centralStoneroller").style.display = "block";
      break;
    case 6:
      document.getElementById("virileCrayfish").style.display = "block";
      break;
    case 7:
      document.getElementById("riverChub").style.display = "block";
      break;
    case 8:
      document.getElementById("goldenShiner").style.display = "block";
      break;
    case 9:
      document.getElementById("northernClearwaterCrayfish").style.display = "block";
      break;
    case 10:
      document.getElementById("commonShiner").style.display = "block";
      break;
    case 11:
      document.getElementById("redsideDace").style.display = "block";
      break;
    case 12:
      document.getElementById("northernPearlDace").style.display = "block";
      break;
    case 13:
      document.getElementById("commonLogperch").style.display = "block";
      break;
    case 14:
      document.getElementById("greensideDarter").style.display = "block";
      break;
    case 15:
      document.getElementById("iowaDarter").style.display = "block";
      break;
    case 16:
      document.getElementById("rainbowDarter").style.display = "block";
      break;
    case 17:
      document.getElementById("johnnyDarter").style.display = "block";
      break;
    case 18:
      document.getElementById("fantailDarter").style.display = "block";
      break;
    case 19:
      document.getElementById("westernBlacknoseDace").style.display = "block";
      break;
    case 20:
      document.getElementById("longnoseDace").style.display = "block";
      break;
    case 21:
      document.getElementById("brindledMadtom").style.display = "block";
      break;
    case 22:
      document.getElementById("mottledSculpin").style.display = "block";
      break;
    case 23:
      document.getElementById("brookSilverside").style.display = "block";
      break;
    case 24:
      document.getElementById("brookStickleback").style.display = "block";
      break;
    case 25:
      document.getElementById("bandedKillifish").style.display = "block";
      break;
    case 26:
      document.getElementById("centralMudminnow").style.display = "block";
      break;
    case 27:
      document.getElementById("slimeySculpin").style.display = "block";
      break;
    case 28:
      document.getElementById("blackstripeTopminnow").style.display = "block";
      break;
    case 29:
      document.getElementById("tadpoleMadtom").style.display = "block";
      break;
    case 30:
      document.getElementById("stonecat").style.display = "block";
      break;
  }
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
  river1Catch.style.display = "none";
  numOfLeaves = 4; 
  river1Leaf1.style.display = "block";
  river2Leaf1.style.display = "block";
  river3Leaf1.style.display = "block";
  river1Leaf2.style.display = "block";
  river2Leaf2.style.display = "block";
  river3Leaf2.style.display = "block";
  river1Leaf3.style.display = "block";
  river2Leaf3.style.display = "block";
  river3Leaf3.style.display = "block";
  river1Leaf4.style.display = "block";
  river2Leaf4.style.display = "block";
  river3Leaf4.style.display = "block";
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
  river2Catch.style.display = "none";
  numOfLeaves = 4; 
  river1Leaf1.style.display = "block";
  river2Leaf1.style.display = "block";
  river3Leaf1.style.display = "block";
  river1Leaf2.style.display = "block";
  river2Leaf2.style.display = "block";
  river3Leaf2.style.display = "block";
  river1Leaf3.style.display = "block";
  river2Leaf3.style.display = "block";
  river3Leaf3.style.display = "block";
  river1Leaf4.style.display = "block";
  river2Leaf4.style.display = "block";
  river3Leaf4.style.display = "block";
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
  river3Catch.style.display = "none";
  numOfLeaves = 4; 
  river1Leaf1.style.display = "block";
  river2Leaf1.style.display = "block";
  river3Leaf1.style.display = "block";
  river1Leaf2.style.display = "block";
  river2Leaf2.style.display = "block";
  river3Leaf2.style.display = "block";
  river1Leaf3.style.display = "block";
  river2Leaf3.style.display = "block";
  river3Leaf3.style.display = "block";
  river1Leaf4.style.display = "block";
  river2Leaf4.style.display = "block";
  river3Leaf4.style.display = "block";
}

function hideLeaf1() {
  river1Leaf1.style.display = "none";
  river2Leaf1.style.display = "none";
  river3Leaf1.style.display = "none";
  numOfLeaves -= 1;
  if (numOfLeaves == 0 && currentRiver == 1) {
    river1Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 2) {
    river2Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 3) {
    river3Catch.style.display = "block";
  }
}
function hideLeaf2() {
  river1Leaf2.style.display = "none";
  river2Leaf2.style.display = "none";
  river3Leaf2.style.display = "none";
  numOfLeaves -= 1;
  if (numOfLeaves == 0 && currentRiver == 1) {
    river1Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 2) {
    river2Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 3) {
    river3Catch.style.display = "block";
  }
}
function hideLeaf3() {
  river1Leaf3.style.display = "none";
  river2Leaf3.style.display = "none";
  river3Leaf3.style.display = "none";
  numOfLeaves -= 1;
  if (numOfLeaves == 0 && currentRiver == 1) {
    river1Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 2) {
    river2Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 3) {
    river3Catch.style.display = "block";
  }
}
function hideLeaf4() {
  river1Leaf4.style.display = "none";
  river2Leaf4.style.display = "none";
  river3Leaf4.style.display = "none";
  numOfLeaves -= 1;
  if (numOfLeaves == 0 && currentRiver == 1) {
    river1Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 2) {
    river2Catch.style.display = "block";
  }
  if (numOfLeaves == 0 && currentRiver == 3) {
    river3Catch.style.display = "block";
  }
}

function goBackToMain(hidden1, hidden){
    document.getElementById(hidden1).style.display = 'none';
    document.getElementById(hidden).style.display = 'none';
    document.getElementById("main").style.display = 'block';
    window.scrollTo(0, 0);
    return false;
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