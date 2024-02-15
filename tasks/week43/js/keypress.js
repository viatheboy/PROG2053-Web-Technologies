let textArea = document.querySelector("#messageForm");
const max = 180;

let charCount = (e) => {
    let msg = document.querySelector("#message").value;
    let used = max - msg.length;
    let display = `${used} Characters Left`;

    let charactersLeft = document.querySelector("#charactersLeft");
    charactersLeft.textContent = display;

    let lastChar = String.fromCharCode(e.keyCode);
    let lastKey = document.querySelector("#lastKey");
    lastKey.textContent = `Last key: ${lastChar}`;
}

let msg = "Horegutt";
let number = msg.length;
let used = max - msg.length;
textArea.addEventListener("keyup", charCount, false);