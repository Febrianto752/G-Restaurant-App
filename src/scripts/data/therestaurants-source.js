import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantsSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetails(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviewRestaurant(customerReview) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerReview)
    });
    return response.json();
  }
}

export default TheRestaurantsSource;