const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let turn = 0;
const boardContainer = document.querySelector("#board");
const playerDiv = document.querySelector("#player");

startGame();

function startGame() {
  renderBoard();
  turn = Math.random() <= 0.5 ? 0 : 1;

  renderCurrentPlayer();

  if (turn === 0) {
    playerPlays();
  } else {
    PCPlays();
  }
}

function playerPlays() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, i) => {
    const column = i % 3;
    const row = parseInt(i / 3);

    if (board[row][column] === "") {
      cell.addEventListener("click", (e) => {
        board[row][column] = "O";
        cell.textContent = board[row][column];

        PCPlays();
      });
    }
  });
}

function PCPlays() {
  renderCurrentPlayer();

  setTimeout(() => {
    let played = false;
    const options = checkIfCanWin();
  }, 1500);
}

function checkIfCanWin() {
  const arr = JSON.parse(JSON.stringify(board));

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arr[i][j] === "X") {
        arr[i][j] = { value: 1, i, j };
      }
      if (arr[i][j] === "") {
        arr[i][j] = { value: 0, i, j };
      }
      if (arr[i][j] === "O") {
        arr[i][j] = { value: -2, i, j };
      }
    }
  }
  const p1 = arr[0][0];
  const p2 = arr[0][1];
  const p3 = arr[0][2];
  const p4 = arr[1][0];
  const p5 = arr[1][1];
  const p6 = arr[1][2];
  const p7 = arr[2][0];
  const p8 = arr[2][1];
  const p9 = arr[2][2];

  const s1 = [p1, p2, p3];
  const s2 = [p4, p5, p6];
  const s3 = [p7, p8, p9];
  const s4 = [p1, p4, p7];
  const s5 = [p2, p5, p8];
  const s6 = [p3, p6, p9];
  const s7 = [p1, p5, p9];
  const s8 = [p3, p5, p7];
}

function renderCurrentPlayer() {
  playerDiv.textContent = `${turn === 0 ? "Player turn" : "PC turn"}`;
}

function renderBoard() {
  const html = board.map((row) => {
    const cells = row.map((cell) => {
      return `<button class="cell">${cell}</button>`;
    });
    return `<div class="row">${cells.join("")}</div>`;
  });

  boardContainer.innerHTML = html.join("");
}
