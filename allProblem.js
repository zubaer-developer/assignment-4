function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let spaceRemoved = str.replaceAll(" ", "");
  let onlyCapitalLetters = spaceRemoved.toUpperCase();
  return onlyCapitalLetters;
}

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