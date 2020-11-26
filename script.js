const gameBoard = (() => {
  let gameBoard = document.querySelector(".ticTacToeBoard");
  let board = [];

  let createBoard = (() => {
    for (let i = 0; i < 9; i++) {
      let boardBox = document.createElement("div");
      boardBox.classList.add("boardBox");
      gameBoard.appendChild(boardBox);
    }
  })();

  return { board };
})();

const displayController = (() => {})();

let createPlayer = () => {
  let name = prompt("Please enter a name.");
  return { name };
};

// let playerOne = createPlayer();
// let playerTwo = createPlayer();
