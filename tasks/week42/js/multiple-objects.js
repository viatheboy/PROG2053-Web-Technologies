class Hotel {
    constructor(name, rooms, booked, room1, room2, room3, room4) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;

        this.costs = {
            room1: room1,
            room2: room2,
            room3: room3,
            room4: room4
        };

    }
    checkAvailability() {
        return this.rooms - this.booked;
    }
}

const hanza = new Hotel("Hanza", 160, 98, 600, 543, 345, 900);
const hilton = new Hotel("Hilton", 90, 24, 343, 456, 444, 890);

console.log(hanza.costs.room1);

let elHanza = document.querySelector("#hotel1");
elHanza.textContent = hanza.name + ": " + hanza.checkAvailability();

let elHilton = document.querySelector("#hotel2");
elHilton.textContent = hilton.name + ": " + hilton.checkAvailability();

// Hotel 1 Room 1 etc
let elH1R1 = document.querySelector("#h1r1");
let elH1R2 = document.querySelector("#h1r2"); 
let elH1R3 = document.querySelector("#h1r3");
let elH1R4 = document.querySelector("#h1r4");
elH1R1.textContent = "Room 1: " + hanza.costs.room1 + ",-";
elH1R2.textContent = "Room 2: " + hanza.costs.room2 + ",-";
elH1R3.textContent = "Room 3: " + hanza.costs.room3 + ",-";
elH1R4.textContent = "Room 4: " + hanza.costs.room4 + ",-";

let elH2R1 = document.querySelector("#h2r1");
let elH2R2 = document.querySelector("#h2r2");
let elH2R3 = document.querySelector("#h2r3");
let elH2R4 = document.querySelector("#h2r4");
elH2R1.textContent = "Room 1: " + hilton.costs.room1 + ",-";
elH2R2.textContent = "Room 2: " + hilton.costs.room2 + ",-";
elH2R3.textContent = "Room 3: " + hilton.costs.room3 + ",-";
elH2R4.textContent = "Room 4: " + hilton.costs.room4 + ",-";