let msg = "<p>The site is currently under maintance</p>";
msg += "<h2 id=\"close\">Close X</h2>";

newNode = document.createElement("div");
newNode.innerHTML = msg;
newNode.setAttribute("id", "note");
document.body.appendChild(newNode);

elClose = document.querySelector("#close");

elClose.addEventListener("click", dismissNote => {
    newNode.remove();
}, false);