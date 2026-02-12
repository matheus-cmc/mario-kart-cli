class Player {
  constructor(name, speed, handling, power) {
    this.name = name;
    this.speed = speed;
    this.handling = handling;
    this.power = power;

    this.points = 0;
    this.wins = 0;
    this.roundWins = 0;
    this.bonusActivated = 0;
  }

  addPoint() {
    this.points += 1;
  }

  addRoundWin() {
    this.roundWins += 1;
  }

  addWin() {
    this.wins += 1;
  }

  addBonus() {
    this.bonusActivated += 1;
  }

  reset() {
    this.points = 0;
    this.roundWins = 0;
    this.bonusActivated = 0;
  }
}

module.exports = Player;
