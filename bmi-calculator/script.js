// DOM elements
const button = document.getElementById("calculate-btn");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const result = document.getElementById("result");
// click event listener for the button
button.addEventListener("click", (e) => {
  e.preventDefault();
  const height = parseFloat(heightInput.value.trim());
  const weight = parseFloat(weightInput.value.trim());
  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    updateResult("Please enter valid height and weight.", "text-red-600");
    return;
  }
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let message = "";
  let colorClass = "";
  if (bmi < 18.6) {
    message = `BMI: ${bmi} — Underweight`;
    colorClass = "text-yellow-600";
  } else if (bmi <= 24.9) {
    message = `BMI: ${bmi} — Normal`;
    colorClass = "text-emerald-600";
  } else {
    message = `BMI: ${bmi} — Overweight`;
    colorClass = "text-red-600";
  }

  updateResult(message, colorClass);
});
function updateResult(message, colorClass) {
  result.textContent = message;
  result.className = `font-bold text-center transition-colors duration-500 ${colorClass}`;
}