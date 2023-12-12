import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combination.js';
import GameOver from './components/GameOver.jsx';

const PLAYERS = {
  'X': 'Michael Jordan',
  'O': 'Ricky Martin'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deviredActivePlayer(turns) {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    // check current gameTurns if the X or O player has their values
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    };
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  for (const turn of gameTurns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  //  Analysing who played last => to give turn to the other player
  let activePlayer = deviredActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      // Updating gameTurns State MOVE with the current player before re-rendering
      let activePlayer = deviredActivePlayer(prevTurn);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurn]


      return updatedTurns
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (<main><div id="game-container">
    <ol id="players" className='highlight-player'>
      <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} nameChange={handlePlayerNameChange} />
      <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} nameChange={handlePlayerNameChange} />
    </ol>
    {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart} />}
    <GameBoard
      onSelectSquare={handleSelectSquare}
      board={gameBoard}
    />
  </div>
    <Log turns={gameTurns} />
  </main>
  )
}

export default App
