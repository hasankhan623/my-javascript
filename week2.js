let restaurantFinderApplication = {
    applicationName: "Restaurant Finder",
    applicationVersion: "1.0",
    restaurants: restaurants,
    findAvailableRestaurants: function (numberOfPeople) {
    let availableRestaurants = [];
    for (let i = 0; i < this.restaurants.length; i++) {
    if (this.restaurants[i].totalSeats - this.restaurants[i].numberOfCustomers >= numberOfPeople) {
    availableRestaurants.push(this.restaurants[i].name);
    }
    }
    return availableRestaurants;
    };


const ages =[30,40,50];
const newage=[];
ages.forEach(function (age) => {
    newage.push(age+5)
    
});