import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {
  createRestaurantListTemplate
} from '../templates/template-creator';
const Favorite = {
  async render() {
    return `
    <header>
      <h2 tabindex="0">Favorite Restaurants</h2>
    </header>
    <div class="wrapper" tabindex="-1">
    
    </div>
    <article-item></article-item>
    `;
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    wrapper.appendChild(createRestaurantListTemplate(restaurants));
    window.scrollTo(0, 480);
  }
}

export default Favorite;