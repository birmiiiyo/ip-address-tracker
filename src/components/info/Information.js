import React from 'react';
import { useState, useEffect } from 'react';
import './Information.scss';

export default function Information() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_2Qgm5PRnbE3K7F7Ps8AgQTv3gduoH&ipAddress=8.8.8.8`,
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="info">
      <div className="block">
        <p> IP ADDRESS</p>
        <h6>{data.ip}</h6>
      </div>
      <div className="block">
        <p>LOCATION</p>
        <h6>
          {data.location.country},{data.location.city}
        </h6>
      </div>
      <div className="block">
        <p>TIMEZONE</p>
        <h6>{data.location.timezone}</h6>
      </div>
      <div className="block">
        <p>ISP</p>
        <h6>{data.isp}</h6>
      </div>
    </div>
  );
}
