/* Show Video Function - Triggers Fullscreen & Sound on Click */
function showVideo() {
    var video = document.getElementById('video');
    var container = document.getElementById('container');

    video.style.display = 'block';
    container.style.display = 'none';

    enableAudio(); // Ensure sound plays
    requestFullscreen();
}

/* Ensure Video Sound is Enabled */
function enableAudio() {
    var video = document.getElementById('video');

    video.muted = false;
    video.play().catch(() => {
        document.addEventListener("click", enableAudio, { once: true });
    });
}

/* Fullscreen Activation */
function requestFullscreen() {
    var content = document.getElementById('container-video');

    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.mozRequestFullScreen) { // Firefox
        content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) { // Chrome, Safari, Opera
        content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) { // Internet Explorer/Edge
        content.msRequestFullscreen();
    }
}
