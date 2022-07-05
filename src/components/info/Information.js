import React from 'react';
import { useSelector } from 'react-redux';

import './Information.scss';

export default function Information() {
  const data = useSelector((state) => state.data.data);
  console.log(data);
  return (
    <div className="info">
      <div className="block">
        <p> IP ADDRESS</p>
        <h6>я</h6>
      </div>
      <div className="block">
        <p>LOCATION</p>
        <h6>я</h6>
      </div>
      <div className="block">
        <p>TIMEZONE</p>
        <h6>я</h6>
      </div>
      <div className="block">
        <p>ISP</p>
        <h6>я</h6>
      </div>
    </div>
  );
}
// {data.ip}
// {data.location.country}, {data.location.city}
// {data.location.timezone}
// {data.isp}
