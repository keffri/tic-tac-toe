const game = (() => {
  const createPlayer = () => {
    playerName = prompt("Please enter a name.");
    while (playerName === null || playerName === "") {
      playerName = prompt("Please enter a name!");
    }
    name = playerName;
    return { name };
  };

  function createPlayers() {
    playerOne = createPlayer();
    playerTwo = createPlayer();
  }

  let ticTacToeBoard = document.getElementById("ticTacToeBoard");
  let board;
  let boxes = Array.from(document.querySelectorAll(".boardBox"));
  let turn;
  let playersTurn;
  let win;
  let turnText = document.getElementById("turnText");
  document
    .getElementById("ticTacToeBoard")
    .addEventListener("click", handleClick);
  let resetButton = document
    .getElementById("resetGame")
    .addEventListener("click", boardInit);

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
    ticTacToeBoard.classList.remove("cantClick");
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
    let index = boxes.findIndex(function (box) {
      return box === e.target;
    });
    clickedBox.textContent = turn === "X" ? "X" : "O";
    board[index] = clickedBox.textContent;
    switchTurn();
    let win = checkWinner();
    if (win === "X") {
      turnText.textContent = `${playerOne.name} wins!`;
      ticTacToeBoard.classList.add("cantClick");
    } else if (win === "O") {
      turnText.textContent = `${playerTwo.name} wins!`;
      ticTacToeBoard.classList.add("cantClick");
    } else if (win === "T") {
      turnText.textContent = `Tie game.`;
    } else {
      turnText.textContent = `It's ${playersTurn.name}'s turn. (${turn}) `;
    }
  }

  function switchTurn() {
    turn = turn === "X" ? "O" : "X";
    playersTurn = playersTurn === playerOne ? playerTwo : playerOne;
  }

  function checkWinner() {
    let winner = null;

    winningCombos.forEach(function (combo) {
      if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      ) {
        winner = board[combo[0]];
      }
    });

    return winner ? winner : board.includes("") ? null : "T";
  }

  createPlayers();
  boardInit();
  return { board, win };
})();
