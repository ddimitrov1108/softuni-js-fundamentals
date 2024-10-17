function reception(arr) {
  const studentsPerHour = arr
    .slice(0, 3)
    .reduce((acc, val) => (acc += +val), 0);

  let remainingStudents = +arr[3];
  let totalHours = 0;

  while (remainingStudents > 0) {
    for (let i = 0; i < 3; i++) {
      if (remainingStudents <= 0) break;

      remainingStudents -= studentsPerHour;
      totalHours++;
    }

    if (remainingStudents > 0) totalHours++;
  }

  console.log(`Time needed: ${totalHours}h.`);
}

reception(["5", "6", "4", "20"]);
reception(["1", "2", "3", "45"]);
