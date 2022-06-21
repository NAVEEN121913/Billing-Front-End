/* ------------Developed By Naveen Kumar----------------- */
/* ------------User Service----------------- */
import postData from '../Common/AxiosClient';
import APP_URL from '../../.env';

const loginUserService = async request => {
  console.log('reques>>>>', request);
  const response = await postData(`${APP_URL}/loginUser`, request);
  console.log('Service Layer : >>>', response.data);
  return response.data;
};

export {loginUserService};
