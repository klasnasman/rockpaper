import React from 'react';

function OptionButton(props) {
  const { option, onClick } = props;

  return (
    <button className='option__btn btn' data-cy="optionBtn" onClick={() => onClick(option)}>{option}</button>
  );
}

export default OptionButton;
