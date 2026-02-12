const { rollDice, randomTrack } = require("./utils");

function applySpecialAbility(player, trackType, baseValue) {
  let bonus = 0;

  if (player.name === "Mario" && trackType === "CURVA") {
    bonus += 1;
    player.addBonus();
    console.log("🔥 Mario ganhou bônus de curva!");
  }

  if (player.name === "Bowser" && trackType === "RETA") {
    bonus += 2;
    player.addBonus();
    console.log("💪 Bowser ativou força máxima na reta!");
  }

  if (player.name === "Yoshi") {
    if (Math.random() < 0.2) {
      bonus += 2;
      player.addBonus();
      console.log("🍀 Yoshi ativou sorte especial!");
    }
  }

  return baseValue + bonus;
}

function playRound(p1, p2, round) {
  console.log(`\n========== RODADA ${round} ==========`);

  const track = randomTrack();
  console.log(`🛣️ Tipo de pista: ${track}`);

  let p1Base;
  let p2Base;

  if (track === "RETA") {
    p1Base = p1.speed + rollDice();
    p2Base = p2.speed + rollDice();
  } else if (track === "CURVA") {
    p1Base = p1.handling + rollDice();
    p2Base = p2.handling + rollDice();
  } else {
    p1Base = p1.power + rollDice();
    p2Base = p2.power + rollDice();
  }

  const p1Total = applySpecialAbility(p1, track, p1Base);
  const p2Total = applySpecialAbility(p2, track, p2Base);

  console.log(`${p1.name}: ${p1Total}`);
  console.log(`${p2.name}: ${p2Total}`);

  if (p1Total > p2Total) {
    p1.addPoint();
    p1.addRoundWin();
    console.log(`🏆 ${p1.name} venceu a rodada!`);
  } else if (p2Total > p1Total) {
    p2.addPoint();
    p2.addRoundWin();
    console.log(`🏆 ${p2.name} venceu a rodada!`);
  } else {
    console.log("🤝 Empate!");
  }
}

function startRace(p1, p2) {
  console.log("🏎️ Preparando motores...");
  console.log("3...");
  console.log("2...");
  console.log("1...");
  console.log("🏁 GO!\n");

  p1.reset();
  p2.reset();

  for (let i = 1; i <= 5; i++) {
    playRound(p1, p2, i);
  }

  console.log("\n🏁 FIM DA CORRIDA!");
  console.log(`\n${p1.name}: ${p1.points} pontos`);
  console.log(`${p2.name}: ${p2.points} pontos`);

  if (p1.points > p2.points) {
    p1.addWin();
    console.log(`🎉 ${p1.name} venceu a corrida!`);
  } else if (p2.points > p1.points) {
    p2.addWin();
    console.log(`🎉 ${p2.name} venceu a corrida!`);
  } else {
    console.log("🤝 A corrida terminou empatada!");
  }

  console.log("\n📊 ESTATÍSTICAS COMPLETAS");
  console.log("----------------------------");
  console.log(`${p1.name}`);
  console.log(`Rodadas vencidas: ${p1.roundWins}`);
  console.log(`Bônus ativados: ${p1.bonusActivated}`);
  console.log(`Vitórias totais: ${p1.wins}`);
  console.log("");
  console.log(`${p2.name}`);
  console.log(`Rodadas vencidas: ${p2.roundWins}`);
  console.log(`Bônus ativados: ${p2.bonusActivated}`);
  console.log(`Vitórias totais: ${p2.wins}`);
}

module.exports = startRace;
