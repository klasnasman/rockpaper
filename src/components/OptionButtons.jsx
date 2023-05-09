import React from "react";

function OptionButtons(props) {
  const { option, onClick, buttonColors } = props;

  return (
    <button
      className={`btn ${buttonColors[option]}`}
      data-cy="optionBtn"
      onClick={() => onClick(option)}>
      {option}
    </button>
  );
}

export default OptionButtons;
