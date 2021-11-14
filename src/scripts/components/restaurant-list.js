import './restaurant-item';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    if (!this._restaurants) {
      this.renderError('List Restaurant not Found!');
    } else if (this._restaurants.length === 0) {
      this.renderError('List Restaurant Favorite is Empty, Please Add Your Favorite Restaurant');
    } else {
      this.setAttribute('class', 'list-restaurant');
      this.setAttribute('tabindex', '-1');

      this.innerHTML = '';
      this._restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        this.appendChild(restaurantItemElement);
      });
    }
  }

  renderError(message) {
    this.innerHTML = `<h2 style="text-align:center; color: gray;">${message}</h2>`;
  }
}

customElements.define('restaurant-list', RestaurantList);
