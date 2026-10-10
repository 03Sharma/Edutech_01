function calculateResult() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let science = Number(document.getElementById("science").value);
    let computer = Number(document.getElementById("computer").value);
    let hindi = Number(document.getElementById("hindi").value);
    // Validation
    if (name === "" || roll === "") {
        alert("Please enter Student Name and Roll Number");
        return;
    }
    let marks = [english, math, science, computer, hindi];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100 || isNaN(marks[i])) {
            alert("Please enter valid marks between 0 and 100");
            return;
        }
    }
    // Calculate Total
    let total = english + math + science + computer + hindi;
    // Calculate Percentage
    let percentage = total / 5;
    // Calculate Grade
    let grade;
    if (percentage >= 90) {
        grade = "A+";

}
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    // Pass / Fail
    let status;
    if (marks.some(mark => mark < 33)) {
        status = "FAIL";
    }
    else {
        status = "PASS";
    }
    // Display Result
    document.getElementById("resultName").innerHTML = name;
    document.getElementById("resultRoll").innerHTML = roll;
    document.getElementById("total").innerHTML = total + " / 500";
    document.getElementById("percentage").innerHTML = percentage.toFixed(2)+ "%";
    document.getElementById("grade").innerHTML = grade;
let statusElement = document.getElementById("status");
statusElement.innerHTML = status;
    if (status === "PASS") {
        statusElement.className = "pass";
    }
    else {
        statusElement.className = "fail";
    }
    document.getElementById("result").style.display = "block";
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("english").value = "";
    document.getElementById("math").value = "";
    document.getElementById("science").value = "";
    document.getElementById("computer").value = "";
    document.getElementById("hindi").value = "";
    document.getElementById("result").style.display = "none";
}
