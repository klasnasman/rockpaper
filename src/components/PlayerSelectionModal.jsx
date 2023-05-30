import React from "react";

function PlayerSelectionModal(props) {
  const { isOpen, onClose, onStart } = props;

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const player1 = e.target.player1.value;
    const player2 = e.target.player2.value;
    onStart(player1, player2);
  };

  return (
    <div className="modal">
      <div className="modal__content flow">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        Play against{" "}
        <button
          data-cy="computerBtn"
          className="btn btn--green"
          onClick={() => onStart("Player", "Computer")}>
          Computer
        </button>{" "}
        or:
        <form onSubmit={handleSubmit}>
          <div className="modal__input">
            <input name="player1" placeholder="PLAYER 1" required />
            vs
            <input name="player2" placeholder="PLAYER 2" required />
            <button data-cy="startBtn" className="btn btn--green" type="submit">
              Start game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PlayerSelectionModal;
