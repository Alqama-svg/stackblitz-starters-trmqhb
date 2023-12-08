function compareStudents(a, b) {
  // Rule 1: Sort by total marks (chemistry + biology)
  const totalMarksA = a.chemistry + a.biology;
  const totalMarksB = b.chemistry + b.biology;

  if (totalMarksB !== totalMarksA) {
    return totalMarksB - totalMarksA;
  }

  // Rule 2: If total marks are the same, sort by biology marks
  if (b.biology !== a.biology) {
    return b.biology - a.biology;
  }

  // Rule 3: If biology marks are also the same, sort by date of birth
  const dobA = new Date(a.dob);
  const dobB = new Date(b.dob);

  return dobA - dobB;
}

// Test Case 1
let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let sortedTest1 = testCase1.sort(compareStudents);
console.log(
  'Test Case 1 Result:',
  sortedTest1.map((student) => student.name)
);

// Test Case 2
let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let sortedTest2 = testCase2.sort(compareStudents);
console.log(
  'Test Case 2 Result:',
  sortedTest2.map((student) => student.name)
);
