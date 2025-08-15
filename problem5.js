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

const report = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(report);
