const createPlayer = () => {
  playerName = prompt("Please enter a name.");
  while (playerName === null || undefined) {
    playerName = prompt("Please enter a name!");
  }
  name = playerName;
  return { name };
};

let playerOne = createPlayer();
let playerTwo = createPlayer();

const gameLogic = (() => {
  let board;
  let boxes = Array.from(document.querySelectorAll(".boardBox"));
  let turn;
  let playersTurn;
  let win;
  let turnText = document.getElementById("turnText");
  document
    .getElementById("ticTacToeBoard")
    .addEventListener("click", handleClick);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function boardInit() {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    playersTurn = playerOne;
    turnText.textContent = `It's ${playersTurn.name}'s turn. (${turn})`;
    createMark();
  }

  function createMark() {
    board.forEach((mark, index) => {
      boxes[index].textContent = mark;
    });
  }

  function handleClick(e) {
    let clickedBox = e.target;
    if (clickedBox.textContent !== "") {
      return;
    }
    clickedBox.textContent = turn === "X" ? "X" : "O";
    switchTurn();
    let win = checkWinner();
    turnText.textContent = `It's ${playersTurn.name}'s turn. (${turn}) `;
  }

  function switchTurn() {
    turn = turn === "X" ? "O" : "X";
    playersTurn = playersTurn === playerOne ? playerTwo : playerOne;
  }

  function checkWinner() {
    let winner = null;

    return winner ? winner : board.includes("") ? null : "T";
  }

  boardInit();
  return { win };
})();
