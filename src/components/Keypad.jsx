import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ usedKeys, handleKeyboard }) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch('data/db.json')
      .then((res) => res.json())
      .then((json) => {
        setLetters(json.letters);
      });
  }, []);

  return (
    <div className="keypad" onKeyDown={handleKeyboard}>
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];

          return (
            <div key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

Keypad.propTypes = {
  usedKeys: PropTypes.object,
  handleKeyboard: PropTypes.any,
};

export default Keypad;
