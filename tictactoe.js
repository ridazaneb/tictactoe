let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let status = document.getElementById('status');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWinner(currentPlayer)) {
        status.textContent = `Player ${currentPlayer} wins!`;
        cells.forEach(cell => cell.removeEventListener('click', () => {}));
      } else if (checkDraw()) {
        status.textContent = 'It\'s a draw!';
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
      }
    }
  });
});

function checkWinner(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  return winningCombos.some(combo =>
    combo.every(index => cells[index].textContent === player)
  );
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}
