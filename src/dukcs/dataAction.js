import axios from 'axios';

const getData = (ip) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_2Qgm5PRnbE3K7F7Ps8AgQTv3gduoH&ipAddress=${ip}`,
      );
      dispatch({
        type: 'GET_DATA',
        payload: data.data,
      });
    } catch (error) {}
  };
};
export { getData };
