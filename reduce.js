
let newStudent = (name, age) => {
  return { name, age }
}

let students = [
    newStudent("Nate", 20),
    newStudent("Luna", 19),
    newStudent("Nathan", 20),
    newStudent("Beatriz", 19)
]


function summanationAge() {
  let totalAge = 0;

  for (let student of students) {

    totalAge += student.age;
  }

  return totalAge;
}

console.log(summanationAge());
