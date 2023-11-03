import { useState } from "react";

import {
  checkGameWinner,
  deriveActivePlayer,
  getGameBoard,
} from "./utils/helpers.js";
import { PLAYERS } from "./utils/data.js";

import Log from "./components/log/Log.jsx";
import Player from "./components/player/Player.jsx";
import GameOver from "./components/game-over/GameOver.jsx";
import GameBoard from "./components/game-board/GameBoard.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const gameBoard = getGameBoard(gameTurns);
  const winner = players[checkGameWinner(gameBoard)];
  const activePlayer = deriveActivePlayer(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;
  const xLogs = gameTurns.filter((turn) => turn.player === "X");
  const oLogs = gameTurns.filter((turn) => turn.player === "O");

  const handleRestart = () => setGameTurns([]);

  const handlePlayerName = (symbol, newName) =>
    setPlayers((prevPlayers) => ({ ...prevPlayers, [symbol]: newName }));

  const handleSelectPlayer = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const player = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: player },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectPlayer} board={gameBoard} />
      </div>

      <div className="logs_container" id="game-container">
        <div className="logs_container-col">
          <h3>{players.X} Moves.</h3>
          <Log turns={xLogs} />
        </div>
        <div className="logs_container-col">
          <h3>{players.O} Moves.</h3>
          <Log turns={oLogs} />
        </div>
      </div>
    </main>
  );
}

export default App;
