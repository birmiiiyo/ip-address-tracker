import React, { useState } from 'react';
import './Form.scss';
import iconArrow from '../../assets/imgs/icon-arrow.svg';
import { useDispatch } from 'react-redux';

import { getData } from '../../dukcs/dataAction';

export default function Form() {
  const [newIp, setNewIp] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'NEW_IP', payload: newIp });
    dispatch(getData(newIp));
    setNewIp('');
  };

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
