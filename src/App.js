import React from 'react';
import './App.scss';
import Form from './components/form/Form';
import Information from './components/info/Information';
import Map from './components/map/Map';
import Error from './components/Error/Error';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function App() {
  const [checkError, setCheckError] = React.useState(true);

  const dispatch = useDispatch();
  const firstData = () => {
    return async (dispatch) => {
      try {
        const data = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_2Qgm5PRnbE3K7F7Ps8AgQTv3gduoH&ipAddress=`,
        );
        dispatch({
          type: 'GET_DATA',
          payload: data.data,
        });
      } catch (err) {
        setCheckError(false);
      }
    };
  };
  //dispatch(firstData(''));
  return (
    <div className="App">
      {checkError === true ? (
        <Error />
      ) : (
        <div className="wrapper">
          <div className="text">
            <h1>IP Address Tracker</h1>

            <Form />

            <Information />
          </div>
          <Map />
        </div>
      )}
    </div>
  );
}

export default App;
