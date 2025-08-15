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


function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let totalScore = 0;
  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < marks.length; i++) {
    totalScore += marks[i];
    if (marks[i] >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let averageMarks = Math.round(totalScore / marks.length);
  const report = {
    finalScore: averageMarks,
    pass: passCount,
    fail: failCount,
  };
 return report;
}
