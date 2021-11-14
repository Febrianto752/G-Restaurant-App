import Restaurants from '../views/pages/restaurants';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Review from '../views/pages/review';

const routes = {
  '/': Restaurants,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/review/:id': Review,
};

export default routes;