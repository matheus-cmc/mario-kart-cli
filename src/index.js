const readline = require("readline");
const Player = require("./player");
const startRace = require("./race");

const players = [
  new Player("Mario", 4, 3, 3),
  new Player("Peach", 3, 4, 2),
  new Player("Yoshi", 2, 4, 3),
  new Player("Bowser", 5, 2, 5),
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.clear();
  console.log("==================================");
  console.log("   🏁 SIMULADOR MARIO KART CLI");
  console.log("==================================\n");
  console.log("Escolha seu personagem:\n");

  players.forEach((player, index) => {
    console.log(`${index + 1} - ${player.name}`);
  });
}

function init() {
  showMenu();

  rl.question("\nDigite o número do personagem: ", (answer) => {
    const choice = Number(answer) - 1;

    if (Number.isNaN(choice) || choice < 0 || choice >= players.length) {
      console.log("\n❌ Escolha inválida.");
      rl.close();
      return;
    }

    const selectedPlayer = players[choice];

    const cpuOptions = players.filter((_, i) => i !== choice);
    const cpu =
      cpuOptions[Math.floor(Math.random() * cpuOptions.length)];

    console.clear();
    console.log(`🎮 Jogador selecionado: ${selectedPlayer.name}`);
    console.log(`🤖 CPU selecionou: ${cpu.name}\n`);

    rl.close();

    startRace(selectedPlayer, cpu);
  });
}

init();
