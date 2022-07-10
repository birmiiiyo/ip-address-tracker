import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import './Information.scss';

export default function Information() {
  const data = useSelector((state) => state.data.data);

  return (
    <div className="info">
      <div className="block">
        <p> IP ADDRESS</p>
        <h6>{isEmpty(data) === false ? `${data.ip}` : 'Oops'}</h6>
      </div>
      <div className="block">
        <p>LOCATION</p>
        <h6>
          {isEmpty(data) === false ? `${data.location.country}, ${data.location.city}` : 'Oops'}
        </h6>
      </div>
      <div className="block">
        <p>TIMEZONE</p>
        <h6>{isEmpty(data) === false ? `${data.location.timezone}` : 'Oops'}</h6>
      </div>
      <div className="block">
        <p>ISP</p>
        <h6>{isEmpty(data) === false ? `${data.isp}` : 'Oops'}</h6>
      </div>
    </div>
  );
}
// {data.ip}
// {data.location.country}, {data.location.city}
// {data.location.timezone}
// {data.isp}31.117.224.170
// 134.212.187.57
// 242.108.48.215
// 175.242.39.182
// 159.85.45.133
