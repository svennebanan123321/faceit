/* Toggle Button to Unmute the Video */
function toggleMute() {
    var video = document.getElementById('video');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

/* Delay Function */
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/* Show Video Function */
function showVideo() {
    var element = document.getElementById('video');
    var button = document.getElementById('container');
    element.style.display = 'block';
    button.style.display = 'none';
    delay(100).then(() => toggleMute());
}

/* Fullscreen Activation */
const fullscreenButton = document.getElementById('button');
const content = document.getElementById('container-video');

fullscreenButton.addEventListener('click', () => {
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.mozRequestFullScreen) { // Firefox
        content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) { // Chrome, Safari, Opera
        content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) { // Internet Explorer/Edge
        content.msRequestFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        content.style.display = 'block';
    } else {
        content.style.display = 'block';
    }
});
