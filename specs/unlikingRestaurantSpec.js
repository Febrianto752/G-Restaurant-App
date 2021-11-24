import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Unliking A Restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<button class="btn-favorite"><i class="fas fa-heart"></i></button>';
  };

  const putRestaurantToIdb = async () => {
    await FavoriteRestaurantIdb.putRestaurant({
      id: 1,
    });
  };

  const createFavoriteButtonInitiator = async () => {
    await LikeButtonInitiator.init({
      buttonLike: document.querySelector('.btn-favorite'),
      restaurant: {
        id: 1,
      },
    });
  };

  beforeEach(async () => {
    addFavoriteButton();
    await putRestaurantToIdb();
    await createFavoriteButtonInitiator();
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavorite widget when the restaurant has been liked', async () => {
    expect(document.querySelector('.btn-favorite').style.color === 'red').toBeTruthy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
