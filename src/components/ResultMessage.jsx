import React from "react";

function ResultMessage(props) {
  const { playerChoice, computerChoice, result } = props;

  return (
    <>
      <p>Your choice: {playerChoice}</p>
      <p>Computers choice: {computerChoice}</p>
      <br />
      <p>{result}</p>
    </>
  );
}

export default ResultMessage;
