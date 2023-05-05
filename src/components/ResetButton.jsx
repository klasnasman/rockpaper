import React from 'react';

function ResetButton(props) {
  const { onClick } = props;

  return (
    <div className='clear__button'>
    <button className='clear__btn btn' onClick={onClick}>Reset</button></div>
  );
}

export default ResetButton;
