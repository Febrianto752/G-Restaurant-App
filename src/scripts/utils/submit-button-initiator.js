import TheRestaurantsSource from '../data/therestaurants-source';
import UrlParser from '../routes/url-parser';
import CONFIG from '../globals/config';
const SubmitButtonInitiator = {
  init({
    button,
    inputName,
    inputReview
  }) {
    this._button = button;
    this._inputName = inputName;
    this._inputReview = inputReview;

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    button.addEventListener('click', async (event) => {
      event.stopPropagation();
      const response = await this._sendReview(url.id);
      if (response.error) {
        alert('failed to add review');
      } else {
        alert('success added your review')
      }


      window.location.replace(`${CONFIG.BASE_URL_APP}`);
    })

  },

  async _sendReview(id) {
    const name = this._inputName.value;
    const review = this._inputReview.value;

    const customerReview = {
      "id": id,
      "name": name,
      "review": review
    };

    const response = await TheRestaurantsSource.reviewRestaurant(customerReview);

    return response;
  }
}

export default SubmitButtonInitiator;