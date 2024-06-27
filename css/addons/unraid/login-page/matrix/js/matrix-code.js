// Adds a video background
// Source: https://www.youtube.com/watch?v=ehvduomE0AU

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted" playsinline> <source src="https:\/\/michaelgermino.github.io\/css\/addons\/unraid\/login-page\/matrix\/video\/matrix-code.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video
