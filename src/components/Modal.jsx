import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const Modal = ({ isCorrect, turn, solution }) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL(
      'https://aliamoteirek.github.io/birthday_scavenger_hunt/'
    ).then(setSrc);
  }, []);

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p>
            The solution is: <span className="solution">{solution}</span>
          </p>
          <p>You found the solution in {turn} guesses</p>
          <p>Your gift is located here. Scan the code!</p>
          <img src={src} alt="QRCode" />
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p>
            The solution is: <span className="solution">{solution}</span>
          </p>
          <p>Better luck next time</p>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  solution: PropTypes.string,
  turn: PropTypes.number,
  isCorrect: PropTypes.bool,
};

export default Modal;
