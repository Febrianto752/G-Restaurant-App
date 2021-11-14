import '../../components/restaurant-detail';
import '../../components/restaurant-list';
import '../../components/review-restaurant';

const createRestaurantListTemplate = (restaurants) => {
  const restaurantList = document.createElement('restaurant-list');
  restaurantList.restaurants = restaurants;
  return restaurantList;
};

const createRestaurantDetailsTemplate = (restaurant) => {
  const restaurantDetails = document.createElement('restaurant-detail');
  restaurantDetails.restaurant = restaurant;
  return restaurantDetails;
};

const createReviewRestaurantTemplate = (restaurant) => {
  const reviewRestaurant = document.createElement('review-restaurant');
  reviewRestaurant.restaurant = restaurant;
  return reviewRestaurant;
};

export {
  createRestaurantListTemplate,
  createRestaurantDetailsTemplate,
  createReviewRestaurantTemplate,
};
