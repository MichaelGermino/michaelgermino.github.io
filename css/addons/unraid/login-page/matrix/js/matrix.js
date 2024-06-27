// Adds a video background
// Source: https://steamcommunity.com/sharedfiles/filedetails/?id=920035918

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted"> <source src="https://raw.githubusercontent.com\/MichaelGermino\/theme.park\/master\/css\/addons\/unraid\/login-page\/matrix\/video\/matrix.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video;
