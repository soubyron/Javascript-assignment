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



const heartButton = document.querySelector('.favourite-button');

heartButton.addEventListener('click', () =>{
    heartButton.classList.toggle('active');

    if (heartButton.classList.contains('active')) {
        heartButton.textContent = '♥';
    } else { heartButton.textContent = '♡';

    }
});


