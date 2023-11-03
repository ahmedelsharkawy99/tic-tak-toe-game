import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD } from "./data";

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";

  return currentPlayer;
}

export function getGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  for (const turn of gameTurns) {
    const {
      square: { row, col },
      player,
    } = turn;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export function checkGameWinner(gameBoard) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbols =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbols =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbols =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbols &&
      firstSquareSymbols === secondSquareSymbols &&
      firstSquareSymbols === thirdSquareSymbols
    ) {
      winner = firstSquareSymbols;
    }
  }

  return winner;
}
