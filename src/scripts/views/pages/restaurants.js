import TheRestaurantsSource from '../../data/therestaurants-source';
import {
  createRestaurantListTemplate
} from '../templates/template-creator';
const Restaurants = {
  async render() {
    return `
    <header>
      <h2 tabindex="0">Explore Restaurants</h2>
    </header>
    <div class="wrapper" tabindex="-1">
    
    </div>
    <article-item></article-item>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantsSource.restaurantList();
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(createRestaurantListTemplate(restaurants));

  }
}

export default Restaurants;