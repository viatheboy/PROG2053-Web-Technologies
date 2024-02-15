let dropDown = document.querySelector("#package");
let terms = document.querySelector("#terms");
let form = document.querySelector("#formSignup");

let dropValue = () => {
    let msg = document.querySelector("#packageHint");
    if (dropDown.value == "monthly") {
        msg.textContent = "Save $10 if you pay for 1 year!";
    } else {
        msg.textContent = "Wise choice!";
    }
}

let checkTerms = (e) => {
    let msg = document.querySelector("#termsHint");
    if (!terms.checked) {
        msg.textContent = "You must agree to the terms";
        e.preventDefault();
    }
}

dropDown.addEventListener("change", dropValue, false);
form.addEventListener("submit", checkTerms, false);