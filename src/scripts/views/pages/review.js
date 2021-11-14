import TheRestaurantsSource from '../../data/therestaurants-source';
import UrlParser from '../../routes/url-parser';
import {
  createReviewRestaurantTemplate,
} from '../templates/template-creator';
import SubmitButtonInitiator from '../../utils/submit-button-initiator';

const Review = {
  async render() {
    return `
    <header>
      <h2 tabindex="0">Review Restaurant</h2>
    </header>
    <div class="wrapper">
    
    </div>
    <article-item></article-item>
    `;
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetails = await TheRestaurantsSource.restaurantDetails(url.id);
    wrapper.appendChild(createReviewRestaurantTemplate(restaurantDetails));

    SubmitButtonInitiator.init({
      button: document.getElementById('submit'),
      inputName: document.getElementById('name'),
      inputReview: document.getElementById('review'),
    });

    window.scrollTo(0, 480);
  },
};

export default Review;
