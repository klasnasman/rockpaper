import React from "react";

function ResetButton(props) {
  const { onClick } = props;

  return (
    <div className="reset__button">
      <button className="btn btn--warning" onClick={onClick}>
        reset
      </button>
    </div>
  );
}

export default ResetButton;
