document.addEventListener("DOMContentLoaded", function () {
    ChangeTheme();
    SetupCalculator();
});

// Handles theme switching
function ChangeTheme() {
    const themeButtons = document.querySelectorAll(".theme-toggle button");

    themeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const theme = this.getAttribute("data-theme");
            document.documentElement.setAttribute("data-theme", theme);
        });
    });
}

let currentExpression = ""; // Stores the full input expression

function SetupCalculator() {
    const math = document.querySelectorAll(".math");
    const del = document.getElementById("del");
    const reset = document.getElementById("reset");
    const cal = document.getElementById("calculate");

    math.forEach(button => {
        button.addEventListener("click", function() {Input(this.innerText)});
    });

    del.addEventListener("click", DeleteLast);
    reset.addEventListener("click", DeleteEntire);
    cal.addEventListener("click", CalculateResult);
}

// Handles input from number and operator buttons
function Input(value) {
    const screen = document.getElementById('screen-num');

    if (screen.innerText === "0") {
        screen.innerText = value;
        currentExpression = value;
    } else {
        screen.innerText += value;
        currentExpression += value;
    }
}

// Deletes the last character from the screen
function DeleteLast() {
    const screen = document.getElementById('screen-num');
    currentExpression = currentExpression.slice(0, -1);
    screen.innerText = currentExpression == ""? '0' : currentExpression;
}

// Resets the calculator
function DeleteEntire() {
    const screen = document.getElementById('screen-num');
    currentExpression = "";
    screen.innerText = "0";
}

// Evaluates the math expression and updates the screen
function CalculateResult() {
    const screen = document.getElementById('screen-num');

    let result = eval(currentExpression);
        screen.innerText = result;
        currentExpression = result.toString();
}
