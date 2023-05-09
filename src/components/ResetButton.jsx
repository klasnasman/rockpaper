import React from "react";

function ResetButton(props) {
  const { onClick } = props;

  return (
    <div className="reset__button">
      <button className="btn btn--reset" onClick={onClick}>
        reset
      </button>
    </div>
  );
}

export default ResetButton;
