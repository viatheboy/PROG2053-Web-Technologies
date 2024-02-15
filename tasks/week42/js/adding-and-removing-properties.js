let hotel = {
    name: "Hanza",
    rooms: 160,
    booked: 80
};

hotel.hasGym = true;
hotel.hasPool = false;
delete hotel.booked;

pool = document.getElementById("pool");
gym = document.getElementById("gym");
pool.className = hotel.hasPool;
gym.className = hotel.hasGym;