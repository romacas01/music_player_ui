var playlist = new Playlist();

var superSonic = new Song("Supersonic", "Oasis", "4:41");
var liveForever = new Song("Live Forever", "Oasis", "4:40");

playlist.add(superSonic);
playlist.add(liveForever);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}