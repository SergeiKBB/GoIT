const students = [
  { name: 'Ольга', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Кристи', gender: 'female' },
];
function sortByGender(students) {
  let maleArray = [];
  let femaleArray = [];
  students.forEach(student => {
    if (student.gender === 'male') {
      maleArray.push(student);
    } else {
      femaleArray.push(student);
    }
  });
  const result = {
    male: maleArray,
    female: femaleArray,
  };
  return result;
}
console.log(sortByGender(students));