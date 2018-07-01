var playlist = {
  Babymetal: "Gimme Chocolate!!"
};

function updatePlaylist(Object, artistName, songTitle) {
  Object[artistName] = songTitle;
  return playlist;
}
