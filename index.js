let turn = "X";

let playerTurn = document.getElementsByClassName("turn")[0];
playerTurn.innerText = `Turn: Player ${turn}`;

function checkIfWin() {
  const comb = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let i = 0; i < comb.length; i++) {
    let sq1 = document.getElementsByClassName("square")[comb[i][0] - 1];
    let sq2 = document.getElementsByClassName("square")[comb[i][1] - 1];
    let sq3 = document.getElementsByClassName("square")[comb[i][2] - 1];
    if (
      sq1.innerHTML != "" &&
      sq1.innerHTML == sq2.innerHTML &&
      sq1.innerHTML == sq3.innerHTML
    ) {
      alert(`Player ${sq1.innerText} has won`);
      resetGame();
      return true;
    }
  }
  return false;
}

function resetGame() {
  clearBoard();
  turn = "X";
  playerTurn.innerText = `Turn: Player X`;
}

function checkIfDraw() {
  let filled_squares = 0;
  for (let i = 0; i < 9; i++) {
    let cur_square = document.getElementsByClassName("square")[i];
    filled_squares += cur_square.innerText != "";
  }
  if (filled_squares == 9) {
    alert("Match has resulted in draw");
    resetGame();
    return true;
  }
  return false;
}

function clearBoard() {
  for (let i = 0; i < 9; i++) {
    let cur_square = document.getElementsByClassName("square")[i];
    cur_square.innerHTML = "";
  }
}

function makeMove(e) {
  if (e.target.innerText == "") {
    e.target.innerText = turn;

    if (!checkIfDraw() && !checkIfWin()) {
      turn = turn == "X" ? "O" : "X";
      playerTurn.innerText = `Turn: Player ${turn}`;
    }
  }
}

for (let i = 0; i < 9; i++) {
  const cur_sq = document.getElementsByClassName("square")[i];
  cur_sq.addEventListener("click", makeMove);
}
