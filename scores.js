// Calculate student grade summaries

const students = [
  { name: "Alice", scores: [88, 92, 75, 100, 83] },
  { name: "Bob", scores: [70, 65, 80, 90, 60] },
  { name: "Carol", scores: [95, 98, 100, 92, 97] },
];

function getAverage(scores) {
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}

function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  return "F";
}

for (const student of students) {
  const avg = getAverage(student.scores);
  const grade = getGrade(avg);
  console.log(`${student.name}: avg=${avg} grade=${grade}`);
}
