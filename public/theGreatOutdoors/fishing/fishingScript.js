const place1 = document.querySelector('a[onclick*="river"]');
const place2 = document.querySelector('a[onclick*="mountainStream"]');
const place3 = document.querySelector('a[onclick*="creek"]');
const place4 = document.querySelector('a[onclick*="lake"]');
const place5 = document.querySelector('a[onclick*="pond"]');
const place6 = document.querySelector('a[onclick*="swamp"]');

if (place1) {
    place1.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('riverFishing.png')";
    })
}
if (place2) {
    place2.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('mountainStreamFishing.png')";
    })
}
if (place3) {
    place3.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('creekFishing.png')";
    })
}
if (place4) {
    place4.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('lakeFishing.png')";
    })
}
if (place5) {
    place5.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('pondFishing.png')";
    })
}
if (place6) {
    place6.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('swampFishing.png')";
    })
}
