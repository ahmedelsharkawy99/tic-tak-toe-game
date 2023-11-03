import "./log.css";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} Selected {turn.square.row}, {turn.square.col} Square
        </li>
      ))}
    </ol>
  );
};

export default Log;
