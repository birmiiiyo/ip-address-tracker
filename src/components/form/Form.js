import React, { useState } from 'react';
import './Form.scss';
import iconArrow from '../../assets/imgs/icon-arrow.svg';

export default function Form() {
  const [newIp, setNewIp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewIp('');
  };
  console.log(newIp);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for any IP address or domain"
          value={newIp}
          onChange={(e) => setNewIp(e.target.value)}
        />
        <button type="submit">
          <img src={iconArrow} alt="button arrow" />
        </button>
      </form>
    </>
  );
}
