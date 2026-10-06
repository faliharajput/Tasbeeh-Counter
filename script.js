// Counter value
let count = 0;


// HTML elements
const countDisplay = document.getElementById("count");

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");

const themeBtn = document.getElementById("themeBtn");


// PLUS BUTTON
plusBtn.addEventListener("click", function () {

    count = count + 1;

    countDisplay.textContent = count;

});


// MINUS BUTTON
minusBtn.addEventListener("click", function () {

    if (count > 0) {

        count = count - 1;

        countDisplay.textContent = count;

    }

});


// RESET BUTTON
resetBtn.addEventListener("click", function () {

    count = 0;

    countDisplay.textContent = count;

});


// DARK / LIGHT MODE
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️ Light";

    } else {

        themeBtn.textContent = "🌙 Dark";

    }

});