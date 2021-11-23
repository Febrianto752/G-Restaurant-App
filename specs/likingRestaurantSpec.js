import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Liking A Restaurant', () => {
  const setFavoriteButton = async (restaurant) => {
    document.body.innerHTML = '<button class="btn-favorite"><i class="fas fa-heart"></i></button>';

    await LikeButtonInitiator.init({
      buttonLike: document.querySelector('.btn-favorite'),
      restaurant,
    });
  };

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await setFavoriteButton({
      id: 1,
    });
    expect(document.querySelector('.btn-favorite').style.color).toEqual('white');
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await setFavoriteButton({
      id: 1,
    });

    expect(document.querySelector('.btn-favorite').style.color === 'red').toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await setFavoriteButton({
      id: 1,
    });

    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({
      id: 1,
    });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await setFavoriteButton({
      id: 1,
    });

    await FavoriteRestaurantIdb.putRestaurant({
      id: 1,
    });

    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{
      id: 1,
    }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await setFavoriteButton({});

    document.querySelector('.btn-favorite').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
