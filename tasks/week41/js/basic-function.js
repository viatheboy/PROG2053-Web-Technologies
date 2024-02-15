const message = "Sign up to recieve our newsletter";

function updateMessage() {
    let el = document.getElementById('message');
    el.textContent = message;
}

updateMessage();