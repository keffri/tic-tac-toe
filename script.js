// let player = (() => {
//   let playerName = prompt("Please enter your name.");
//   if (playerName === null) {
//     alert("Please enter a name.");
//   }
//   return { playerName };
// })();

const displayController = (() => {
  let gameBoard = document.querySelector(".ticTacToeBoard");

  let createBoard = (() => {
    for (let i = 1; i <= 9; i++) {
      let boardBox = document.createElement("div");
      boardBox.classList.add("boardBox");
      gameBoard.appendChild(boardBox);
    }
  })();

  return { gameBoard };
})();

const gameBoard = (() => {
  let gameBoard = document.querySelector(".ticTacToeBoard");
  let boardBoxes = document.querySelectorAll(".boardBox");
  let board = ["", "", "", "", "", "", "", "", ""];

  boardBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("test");
    });
  });

  return { boardBoxes };
})();
