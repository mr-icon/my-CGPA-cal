"use strict";

const gradeCalc = (grade, unit) => {
  switch (grade) {
    case "A":
      return 5 * unit;
    case "B":
      return 4 * unit;
    case "C":
      return 3 * unit;
    case "D":
      return 2 * unit;
    case "E":
      return 1 * unit;
    default:
      return 0 * unit;
  }
};

let counter = 1;

function addCourse() {
  let addNew = document.createElement("form");
  addNew.classList.add("add_new", `key-${counter}`);
  const course_name = `
    <form class="add_new key-${counter}">
        <input type="text" placeholder="Course Code"
        class="courses key-${counter}" required>
        <input type="number" placeholder="Credit Unit"
        class="credit-units key-${counter}" required>
        <select class="grade key-${counter}" required>
        <option value="select">select</option>
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="1">E</option>
        <option value="0">F</option>
        </select>
        </form>
        `;
  addNew.innerHTML = course_name;
  document.getElementById("course-wrapper").appendChild(addNew);
  counter++;
}

function removeCourse() {
  let mainForm = document.querySelector("form.add_new");
  mainForm.remove();
}

const reports = [];

function calcCgpa() {
  const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
  const GRADESSELECT = document.querySelectorAll("select.grade");
  const UNIT = document.querySelectorAll("input.credit-units");

  const courseReport = {};

  const listOfGrade = [];
  const listOfUnits = [];
  let totalUnits = 0;

  GRADESSELECT.forEach((e) => {
    let GRADES = e.options;
    const selectedIndex = e.selectedIndex;
    const selectedGrade = GRADES[selectedIndex];
    const gradeValue = selectedGrade.text.toUpperCase();
    listOfGrade.push(gradeValue);
  });
  console.log(listOfGrade);

  UNIT.forEach((e) => {
    const unitValue = parseInt(e.value);
    totalUnits = unitValue + totalUnits;
    // listOfUnits = [...listOfUnits, unitValue];
    listOfUnits.push(unitValue);
  });
  console.log(listOfUnits);

  let totalEarnedUnits = 0;

  for (let i = 0; i < listOfUnits.length; i++) {
    totalEarnedUnits += gradeCalc(listOfGrade[i], listOfUnits[i]);
  }
  const gpa = totalEarnedUnits / totalUnits;
  console.log(gpa);

  if (gpa >= 0) {
    CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);
  } else {
    CGPAPARAGRAPH.textContent =
      "please enter your correct grade and credit units";
  }

  $('#myModal').modal(options)

  $('#myModal').modal({
    keyboard: false
  })

  $('#myModal').modal('toggle')
  
  $('#myModal').modal('hide')

  $('#myModal').modal('show')

  $('#myModal').modal('handleUpdate')

  $('#myModal').modal('dispose')

  $('#myModal').on('hidden.bs.modal', function(event) {
    calcCgpa()
  })
}

