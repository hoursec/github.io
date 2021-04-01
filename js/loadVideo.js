function loadVideo(videoSource, videoNumber) {
  portfolio = document.getElementById("portfolio"+String(videoNumber));
  console.log(portfolio)
  portfolio.style.display = "none";

  if (!document.getElementById('image' + String(videoNumber))) {
    var videoEl = document.getElementById('video' + String(videoNumber));
    var playing = !!(videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended && videoEl.readyState > 2);
    if (playing) {
      videoEl.pause();
    }
    else {
      videoEl.play();
    }
  }
  else {
    // Replace image with video
    const main = document.getElementById('image' + String(videoNumber));
    const original = document.getElementById('video' + String(videoNumber));
    const clone = original.cloneNode(true);
    main.replaceWith(clone);

    // Play video
    var videoEl = document.getElementById('video' + String(videoNumber));
    videoEl.removeAttribute("hidden");
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = videoSource;
    sourceEl.setAttribute("playsinline", "playsinline");
    videoEl.play();
  }
}
