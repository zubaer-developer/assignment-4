function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let player1Score = player1.foul + player1.cardY + player1.cardR;
  let player2Score = player2.foul + player2.cardY + player2.cardR;
  if (player1Score > player2Score) {
    return player1.name;
  } else if (player2Score > player1Score) {
    return player2.name;
  } else {
    return "Tie";
  }
}

const result = bestTeam({ name: "Brazil", foul: 0, cardY: 0, cardR: 0 },

{ name: "Argentina", foul: 0, cardY: 0, cardR: 0 });
console.log(result);
