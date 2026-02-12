function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function randomTrack() {
  const tracks = ["RETA", "CURVA", "CONFRONTO"];
  return tracks[Math.floor(Math.random() * tracks.length)];
}

module.exports = {
  rollDice,
  randomTrack,
};
