let hotel = {
    name: "hanza",
    room_rate: 400,
    discount: 0.20,

    offerPrice: function() {
        return this.room_rate - (this.room_rate*this.discount);
    }
};

let elName = document.querySelector("#hotelName");
let elRoomRate = document.querySelector("#roomRate");
let elOffer = document.querySelector("#specialRate");
elName.textContent = hotel.name;
elRoomRate.textContent = "Room Rate: " + hotel.room_rate + ",-";
elOffer.textContent = hotel.offerPrice().toFixed() + ",-";

function offerExpires(today) {
    let weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 
                  'May', 'June', 'July', 'August', 'September', 
                  'October', 'November', 'December'];
    
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    let expiryMsg = "Offer expires next ";
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
}

let today = new Date();
let elOfferEnds = document.querySelector("#offerEnds");
elOfferEnds.innerHTML = offerExpires(today);