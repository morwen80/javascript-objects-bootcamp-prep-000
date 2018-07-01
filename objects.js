var playlist = {
  Babymetal: "Gimme Chocolate!!"
};

function updatePlaylist(Object, artistName, songTitle) {
  Object[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
