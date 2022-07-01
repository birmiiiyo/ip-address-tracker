import React from 'react';
import './Form.scss';
import iconArrow from '../../assets/imgs/icon-arrow.svg';

export default function Form() {
  return (
    <>
      {' '}
      <form>
        <input />
        <button type="submit">
          <img src={iconArrow} />
        </button>
      </form>
    </>
  );
}
