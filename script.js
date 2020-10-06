const gameBoard = (() => {
  const board = ["X", "0", "X", "0", "X", "0", "X", "0", "X"];

  let cells = document.querySelectorAll(".cell");
  const displayMarkers = () => {
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = board[i];
    }
  };

  return {
    board,
    displayMarkers,
  };
})();

const displayController = (() => {
  //
})();

const createPlayer = () => {
  name = prompt("Enter player name.");
  return { name };
};

gameBoard.displayMarkers();
