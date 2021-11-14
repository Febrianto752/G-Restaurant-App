import '../../components/restaurant-detail';
import '../../components/restaurant-list';
import '../../components/restaurant-item';

const createRestaurantListTemplate = (restaurants) => {
  const restaurantList = document.createElement('restaurant-list');
  restaurantList.restaurants = restaurants;
  return restaurantList;
}

const createRestaurantDetailsTemplate = (restaurant) => {
  const restaurantDetails = document.createElement('restaurant-detail');
  restaurantDetails.restaurant = restaurant;
  return restaurantDetails;
}


export {
  createRestaurantListTemplate,
  createRestaurantDetailsTemplate
};