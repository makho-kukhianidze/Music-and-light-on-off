// Variable block - Start.
let light = document.querySelector('#lightbBtn'); // light on/off's button.
let musicbBtn = document.querySelector('#musicbBtn'); // background music on/off's button.
// Music and light on/off - background music - Start.
let bgMuisc = new Audio(); // background music - sound.
bgMuisc.src = 'assets/music/romanticMuisc.mp3'; // background music - src.
// Music and light on/off - background music - End.
// Variable block - End.

// Music and light on/off's addEventListener - Start.
// Music and light on/off's addEventListener - light on/off button - Start.
light.addEventListener('click', function (e) { 
    e.target.classList.toggle('bulb-on');  // light on/off button's - classList toggle.
    document.body.classList.toggle('body-back'); // body - background image.
    lightOffAndOn();
})
// Music and light on/off's addEventListener - light on/off button - End.
// Music and light on/off's addEventListener - music background button - Start.

musicbBtn.addEventListener('click', function (e) { 
    musicOnOff(); // background music on/off's addEventListener.
})
// Music and light on/off's addEventListener - music background button - End.
// Music and light on/off's addEventListener - End.

// Function block - Start.
// Function - Music and light on/off - Start. 
function musicOnOff() {
    const musicOnOff = document.querySelector('#musicOnOff');
    if (musicOnOff.innerHTML === "OFF") {
        musicOnOff.innerHTML = "ON";
        bgMuisc.play();  // background music - start.

    } else {
        musicOnOff.innerHTML = "OFF";
        bgMuisc.pause(); // background music - pause.       
    }
}
function lightOffAndOn() {
    const lightBulb = document.querySelector('#light-off');
    if (lightBulb.innerHTML === "ON") {
        lightBulb.innerHTML = "OFF";
    } else {
        lightBulb.innerHTML = "ON";
    }
}
// Function - Music and light on/off - End. 
// Function block - End.