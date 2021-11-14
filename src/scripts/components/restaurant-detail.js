class RestaurantDetail extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('class', 'detail-restaurant');

    const customerReviews = this._restaurant.customerReviews;
    const {
      foods,
      drinks
    } = this._restaurant.menus;
    let reviewsStringElement = '';
    let foodsMenus = foods.map(food => food.name);
    let drinksMenus = drinks.map(drink => drink.name);



    customerReviews.forEach((reviewer) => {
      reviewsStringElement += `
      <div class="reviewer">
        <p class="name">${reviewer.name}</p>
        <p>${reviewer.review}</p>
        <p class="date">${reviewer.date}</p>
      </div>
      `;
    })

    this.innerHTML = `
    <button class="btn-close"><a href="#/"><i class="fas fa-times"></i></a></button>

    <div class="detail-image">
      <img src="https://restaurant-api.dicoding.dev/images/medium/${this._restaurant.pictureId}" alt="restaurant image">
      <button class="btn-favorite"><i class="fas fa-heart"></i></button>
      <button class="btn-add-review"><a href="#/review/${this._restaurant.id}">Add Review</a></button>
    </div>
    <div class="info">
      <h3>Restaurant : ${this._restaurant.name}</h3>
      <p>city : ${this._restaurant.city}</p>
      <p>Address : ${this._restaurant.address}</p>
      <p>Foods Menus : ${foodsMenus.join(', ')}</p>
      <p>Drinks Menus : ${drinksMenus.join(', ')}</p>
      <p>description : ${this._restaurant.description}</p>
      <h4>Reviews </h4>
      <div class="reviews">

        ${reviewsStringElement}
        
      </div>
    </div>
    `;

  }
}

customElements.define('restaurant-detail', RestaurantDetail);