export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter the students for the given city
  const filteredStudents = students.filter(student => student.city === city);
  
  // Map the filtered students to update their grades
  const updatedStudents = filteredStudents.map(student => {
    const foundGrade = newGrades.find(grade => grade.studentId === student.id);
    const grade = foundGrade ? foundGrade.grade : "N/A";
    return { ...student, grade };
  });
  
  return updatedStudents;
}

