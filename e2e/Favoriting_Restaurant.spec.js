const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({
  I,
}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({
  I,
}) => {
  I.see('List Restaurant Favorite is Empty, Please Add Your Favorite Restaurant', 'restaurant-list h2');
});

Scenario('Favoriting one restaurant', async ({
  I,
}) => {
  I.amOnPage('/');

  I.seeElement('.card-body h3 a');

  const firstRestaurant = locate('restaurant-item .card-body h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('.btn-favorite');
  I.click('.btn-favorite');
  const btnFavorite = locate('.btn-favorite').first();
  const btnFavoriteColor = await I.grabCssPropertyFrom(btnFavorite, 'color');

  assert.strictEqual(btnFavoriteColor, 'rgb(255, 0, 0)');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item.card');

  const favoritedRestaurantTitle = await I.grabTextFrom('.card-body h3 a');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  /* unfavoriting one restaurant */
  const firstFavoritedRestaurant = locate('restaurant-item .card-body h3 a').first();
  I.click(firstFavoritedRestaurant);
  I.seeElement('.btn-favorite');
  const btnFavorited = locate('.btn-favorite').first();
  I.click(btnFavorited);
  const btnFavoritedColor = await I.grabCssPropertyFrom(btnFavorited, 'color');
  console.log(btnFavoritedColor);
  assert.strictEqual(btnFavoritedColor, 'rgb(255, 255, 255)');

  I.amOnPage('/#/favorite');
  I.see('List Restaurant Favorite is Empty, Please Add Your Favorite Restaurant', 'restaurant-list h2');
});