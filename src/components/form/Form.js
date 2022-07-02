import React, { useState } from 'react';
import './Form.scss';
import iconArrow from '../../assets/imgs/icon-arrow.svg';

export default function Form() {
  const [ip, setIp] = useState('');

  const newIp = (e) => {
    e.preventDefault();
    setIp(e.target.value);
  };

  console.log(ip);
  return (
    <>
      <form onSubmit={newIp}>
        <input placeholder="192.168.1.1" value={ip} />
        <button type="submit">
          <img src={iconArrow} />
        </button>
      </form>
    </>
  );
}
