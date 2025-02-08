.clickable-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black; /* In case the image doesn't fully cover */
}

.clickable-image img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    cursor: pointer;
}
