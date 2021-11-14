const CONFIG = {
  BASE_URL_APP: '/',
  BASE_URL_API: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: (size) => `https://restaurant-api.dicoding.dev/images/${size}`,
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'g-restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
