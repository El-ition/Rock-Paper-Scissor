import { useState } from 'react';
import paperImg from '../images/icon-paper.svg';
import rockImg from '../images/icon-rock.svg';
import scissorsImg from '../images/icon-scissors.svg';

function FinalGame({ code, setIsClicked, computerCode, score, title }) {
  const handleBack = () => {
    setIsClicked(false);
  };

  // console.log(computerCode);
  return (
    <div>
      <div>
        <h2>you picked</h2>
        <img
          src={
            code === 1
              ? rockImg
              : code === 2
              ? paperImg
              : code === 3
              ? scissorsImg
              : null
          }
          alt="your picked"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <button onClick={handleBack}>play again</button>
      </div>
      <div>
        <h2>you picked</h2>
        <img
          src={
            computerCode === 1
              ? rockImg
              : computerCode === 2
              ? paperImg
              : computerCode === 3
              ? scissorsImg
              : null
          }
          alt="your picked"
        />
      </div>
    </div>
  );
}

export default FinalGame;
