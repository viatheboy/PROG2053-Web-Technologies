function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;

    let sizes = [area, volume];

    return sizes;
}

let arr = getSize(10, 20, 30);

let elArea = document.getElementById('area');
elArea.textContent = arr[0];

let elVol = document.getElementById('volume');
elVol.textContent = arr[1];