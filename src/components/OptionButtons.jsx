import React from "react";

function OptionButtons(props) {
  const { option, onClick, buttonColors } = props;

  return (
    <button
      className="btn"
      data-cy={`${buttonColors[option]}`}
      onClick={() => onClick(option)}>
      {option}
    </button>
  );
}

export default OptionButtons;
