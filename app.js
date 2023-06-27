const form = document.querySelector(".form");
const inputYears = document.getElementById("inputYears");
const inputMonths = document.getElementById("inputMonths");
const inputDays = document.getElementById("inputDays");
const printYears = document.getElementById("years");
const printMonths = document.getElementById("months");
const printDays = document.getElementById("days");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  calculateAge(inputYears.value, inputMonths.value, inputDays.value);
});

const calculateAge = (years, months, days) => {
  today = new Date();
  birthday = new Date(years, months-1, days);
  birthdayMonthDays = new Date(years, months, 0);
  currentMonthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  currentYears = today.getFullYear() - birthday.getFullYear() -1;
  currentMonths = 12 - birthday.getMonth() + today.getMonth();
  currentDays = (birthdayMonthDays.getDate() - birthday.getDate()) + today.getDate();

  if (currentMonths > 12) {
    currentYears += 1
    currentMonths -= 12
  }
  if (currentDays > currentMonthDays) {
    currentMonths += 1
    currentDays -= currentMonthDays
  }
  changeData(currentYears, currentMonths, currentDays);
};

const changeData = (years, months, days) => {
  printYears.textContent = years;
  printMonths.textContent = months;
  printDays.textContent = days;
};
