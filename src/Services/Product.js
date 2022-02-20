/* ------------Developed By Naveen Kumar----------------- */
/* ------------Product Service----------------- */
import postData from '../Common/AxiosClient';
import APP_URL from '../../.env';

const ProductList = async request => {
  const response = await postData(`${APP_URL}/fetchProduct`, request);
  console.log('Service Layer : >>>', response.data);
  return response.data;
};

export {ProductList};
