//let
let studentCount = 10;
studentCount = 11;

console.log("Student Count:", studentCount);

//const
const collegeName = "VETIAS";

console.log("college Name:", collegeName);

//Template Literals
let studentName = "Arun";

console.log(`Welcome ${studentName} to ${collegeName}`);

//object
const student = {
    name: "Arun",
    age: 20,
    department: "AIDS"
}
console.log(student);

//Destructring
const {name, age, department } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

//Arrow function
const displayStudent = () => {
    console.log(`Student Name: ${name}`);
};
displayStudent();

//Arrays
const students = [
    "Arun",
    "Ramya",
    "Rohitha"
];
console.log(student);

//spread Operator
const updatedStudents = [
    ...students,
    "Rahul"
];
console.log(updatedStudents);

//Rest operator
function MaximumMarks(...marks) {

    let max = Math.max(...marks);

    return max;
}
console.group("MaximumMarks:", MaximumMarks(80, 90, 70));