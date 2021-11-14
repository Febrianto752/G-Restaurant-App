import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL_API}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL_API}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL_API}/review`,
};

export default API_ENDPOINT;
