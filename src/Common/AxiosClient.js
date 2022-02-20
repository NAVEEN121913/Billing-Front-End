/* ------------Developed By Naveen Kumar----------------- */
/* ------------Axios Client----------------- */
import axios from 'axios';

async function postData(url, payload) {
  try {
    console.log('Request ====>', url, payload);
    const response = await axios.post(url, payload);
    console.log('Axios Response ====>', JSON.stringify(response.data));
    const responseData = {
      success: response.data.success,
      data: response.data.data,
      status: response.status,
    };
    console.log('responseData ===>>', responseData);
    return responseData;
  } catch (error) {
    console.log('error====>', error);
  }
}

export default postData;
