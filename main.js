const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let turn = 0;
const boardContainer = document.querySelector("#board");
const playerDiv = document.querySelector("#player");

function renderBoard() {
  const html = board.map((row) => {
    const cells = row.map((cell) => {
      return `<button class="cell>${cell}</button>`;
    });
  });
}
