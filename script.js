/* 
1. Get the search input
2. Get the cuisine dropdown
3. Get all restaurant cards

4. Get what the user typed
5. Get the cuisine the user selected

6. Check if restaurant name matches search
7. Check if cuisine matches selected cuisine

8. Look at display when there are matches
9. Look at display when there are no matches
*/

const searchInput = document.getElementById("restaurant-search");
const cuisineFilter = document.getElementById("cuisine-filter");
const restaurantCards = document.querySelectorAll(".restaurant-card");

function filterRestaurants() {

    const searchTerm = searchInput.value.toLowerCase();
    const selectedCuisine = cuisineFilter.value.toLowerCase();

    restaurantCards.forEach(function (card) {

        const restaurantName = card.querySelector("h3").textContent.toLowerCase();
        const cuisine = card.querySelector(".cuisine-tag").textContent.toLowerCase();

        const matchesSearch = restaurantName.includes(searchTerm);

        const matchesCuisine =
            selectedCuisine === "all" ||
            cuisine === selectedCuisine;

        if (matchesSearch && matchesCuisine) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterRestaurants);

cuisineFilter.addEventListener("change", filterRestaurants);




/*
1. Get favourite button
2. Change favourite button when clicked
3. Change back to normal when clicked again after initial click
*/


const heartButtons = document.querySelectorAll('.favourite-button');

heartButtons.forEach((heartButton) => {

    heartButton.addEventListener('click', () => {
        heartButton.classList.toggle('active');

        if (heartButton.classList.contains('active')) {
            heartButton.textContent = '♥';
        } else {
            heartButton.textContent = '♡';

        }
    });

});



const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

const bookings = [];

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const restaurant = document.getElementById('booking-restaurant').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    const guests = document.getElementById('booking-guests').value;

    const today = new Date().toISOString().split('T')[0];

    if (restaurant === "" || date === "" || time === "" || guests === "") {
        bookingMessage.textContent = "Please fill in all fields."
        return;
    }

    if (date < today) {
        bookingMessage.textContent = "Please choose a future date.";
        return;
    }

    const booking = {
        restaurant: restaurant,
        date: date,
        time: time,
        guests: guests
    };

    bookings.push(booking);

    const bookingsList = document.getElementById("bookings-list");
    const bookingItem = document.createElement("div");

    bookingItem.classList.add("booking-card");

    const restaurantName = document.createElement("h3");
    const bookingDate = document.createElement("p");
    const bookingTime = document.createElement("p");
    const bookingGuests = document.createElement("p");

    restaurantName.textContent = booking.restaurant;
    bookingDate.textContent = "Date: " + booking.date;
    bookingTime.textContent = "Time: " + booking.time;
    bookingGuests.textContent = "Guests: " + booking.guests;

    bookingItem.appendChild(restaurantName);
    bookingItem.appendChild(bookingDate);
    bookingItem.appendChild(bookingTime);
    bookingItem.appendChild(bookingGuests);


    bookingsList.appendChild(bookingItem);


    bookingMessage.textContent = "Booking is confirmed!";
    bookingForm.reset();
});