function toggleMute() {
    var video = document.getElementById('video');
    video.muted = false;
}

document.addEventListener("DOMContentLoaded", function () {
    var videoContainer = document.getElementById('container-video');
    var videoElement = document.getElementById('video');
    
    // Immediately show video and unmute
    videoContainer.style.display = 'block';
    videoElement.style.display = 'block';
    
    // Request fullscreen (may require user interaction on some browsers)
    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen().catch(err => {
            console.error('Fullscreen failed:', err);
        });
    }
    
    // Unmute after short delay
    setTimeout(toggleMute, 100);
});
