import Row from './Row';
import PropTypes from 'prop-types';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
};

Grid.propTypes = {
  currentGuess: PropTypes.string,
  guesses: PropTypes.array,
  turn: PropTypes.number,
};

export default Grid;
