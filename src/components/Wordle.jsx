import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';
import PropTypes from 'prop-types';

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyup);

    if (isCorrect) {
      //   console.log('Congrats, you win!');
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keydown', handleKeyup);
    }

    if (turn > 5) {
      //   console.log('Unlucky, out of guesses');
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keydown', handleKeyup);
    }

    return () => window.removeEventListener('keydown', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  /* useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]); */

  return (
    <div>
      {/* <div>Solution - {solution}</div>
      <div>Current guess - {currentGuess}</div> */}
      <div>6 chances to guess a 5-letter word.</div>
      <br />

      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
};

Wordle.propTypes = {
  solution: PropTypes.string,
};

export default Wordle;
