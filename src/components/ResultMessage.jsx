import React from "react";

function ResultMessage(props) {
  const { playerChoice, computerChoice, result } = props;

  return (
    <>
      <p>
        (Player) {playerChoice} vs {computerChoice} (Computer)
      </p>
      <br />
      <p>{result}</p>
    </>
  );
}

export default ResultMessage;
