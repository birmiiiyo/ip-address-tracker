import React from 'react';
import './Information.scss';

export default function Information() {
  React.useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_2Qgm5PRnbE3K7F7Ps8AgQTv3gduoH&ipAddress=`,
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="info">
      <div className="block">
        <p> IP ADDRESS</p>
        <h6>192.168.1.1</h6>
      </div>
      <div className="block">
        <p>LOCATION</p>
        <h6>Minsk</h6>
      </div>
      <div className="block">
        <p>TIMEZONE</p>
        <h6>utc -3</h6>
      </div>
      <div className="block">
        <p>ISP</p>
        <h6>SpaceX</h6>
      </div>
    </div>
  );
}
