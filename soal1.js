function fazztrack(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    let nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    if (nextMultipleOfFive - grade < 3) {
      return nextMultipleOfFive;
    }

    return grade;
  });
}

let input = [73, 67, 38, 33];
let output = fazztrack(input);
console.log(output);
