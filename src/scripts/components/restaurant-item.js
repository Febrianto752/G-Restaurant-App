import CONFIG from '../globals/config';
class RestaurantItem extends HTMLElement {

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {

    this.setAttribute('class', 'card');
    this.setAttribute('aria-label', 'restaurant');
    this.setAttribute('tabindex', '0');

    this.innerHTML = `
    <div class="card-header">
        <img src="${CONFIG.BASE_IMAGE_URL('small')}/${this._restaurant.pictureId}" alt="${this._restaurant.name} image">
        <span class="tag" tabindex="0">${this._restaurant.city}</span>
    </div>
    <div class="card-body">
        <p class="rating" tabindex="0">Rating : ${this._restaurant.rating} of 5 <i class="fa fa-star" aria-hidden="true"></i>
        </p>
        <h3><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
        <p class="description" tabindex="0">${this._restaurant.description}</p>
    </div>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem);