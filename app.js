/*!
 * JukeBoXT - Web Jukebox
 * © 2025 Vaishnavi Gudimella. Licensed under the MIT License.
 * See LICENSE file for details.
 */

// Select elements
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const volumeSlider = document.getElementById("volume");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const albumArt = document.getElementById("album-art");

// Dummy playlist (Replace with Spotify data later)
const playlist = [
    { title: "Song 1", artist: "Artist A", cover: "assets/song1.jpg" },
    { title: "Song 2", artist: "Artist B", cover: "assets/song2.jpg" },
    { title: "Song 3", artist: "Artist C", cover: "assets/song3.jpg" }
];

let currentTrack = 0;

// Update track info
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    albumArt.src = track.cover;
}

playButton.addEventListener("click", () => {
    console.log("Play pressed!");
    // Simulate playback with console logs (Replace with Spotify later)
});

pauseButton.addEventListener("click", () => {
    console.log("Pause pressed!");
});

prevButton.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
});

nextButton.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
});

volumeSlider.addEventListener("input", (event) => {
    console.log(`Volume: ${event.target.value}`);
});

// Load the first track on page load
loadTrack(currentTrack);
