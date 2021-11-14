import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';

const LikeButtonInitiator = {
  async init({
    buttonLike,
    restaurant
  }) {
    this._buttonLike = buttonLike;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {
      id
    } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked(id);
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._buttonLike.style.color = 'white';
    this._buttonLike.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    })
  },

  _renderLiked(id) {
    this._buttonLike.style.color = 'red';
    this._buttonLike.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(id);
      this._renderButton();
    });
  }
}

export default LikeButtonInitiator;