let number = 3;
let operator = "addition";
let msg = "";

if (operator === "addition") {
    for (let i = 1; i < 11; i++) {
       msg += i + " + " + number + " = " + (i+number) + '<br/>';

    }
} else if (operator == "multiplication") {
    number = number * number;
}
let el = document.getElementById("blackboard");
el.innerHTML = msg;