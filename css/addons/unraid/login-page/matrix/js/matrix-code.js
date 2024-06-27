// Adds a video background
// Source: https://www.youtube.com/watch?v=ehvduomE0AU

let video = `
<div class="background-wrap">
    <video id="video-bg-elem" preload="auto" autoplay loop muted playsinline>
        <source src="https:\/\/michaelgermino.github.io\/css\/addons\/unraid\/login-page\/matrix\/video\/please_stand_by.mp4" type="video/mp4">
        Video not supported
    </video>
</div>
`;

// Append the video HTML to the body
document.body.innerHTML += video;

// Apply CSS styles dynamically
let style = document.createElement('style');
style.innerHTML = `
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Ensure no scrollbars */
}

.background-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Ensure it's behind other content */
}

#video-bg-elem {
    min-width: 100%; 
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;

// Append the style to the head
document.head.appendChild(style);
