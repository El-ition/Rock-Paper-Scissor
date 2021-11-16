import { useEffect, useRef, useState } from 'react';
import FinalGame from './FinalGame';
import paperImg from '../images/icon-paper.svg';
import rockImg from '../images/icon-rock.svg';
import scissorsImg from '../images/icon-scissors.svg';
import Score from './Score';
import EndGame from './EndGame';

function StartGame() {
  const [pictureCode, setPictureCode] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [computerCode, setComputerCode] = useState(null);
  const [score, setScore] = useState(-2);
  const [title, setTitle] = useState('');
  const [gameEnds, setGameEnds] = useState(false);

  useEffect(() => {
    if (pictureCode === 1 && computerCode === 3) {
      setScore((prev) => prev + 1);
      setTitle('You Win!!');
    }
    if (pictureCode === 2 && computerCode === 1) {
      setScore((prev) => prev + 1);
      setTitle('You Win!!');
    }
    if (pictureCode === 3 && computerCode === 2) {
      setScore((prev) => prev + 1);
      setTitle('You Win!!');
    }
    if (pictureCode === 3 && computerCode === 1) {
      setScore((prev) => prev - 1);
      setTitle('You Lose!');
    }
    if (pictureCode === 1 && computerCode === 2) {
      setScore((prev) => prev - 1);
      setTitle('You Lose!');
    }
    if (pictureCode === 2 && computerCode === 3) {
      setScore((prev) => prev - 1);
      setTitle('You Lose!');
    }
    if (pictureCode === computerCode) {
      setTitle('Tie');
    }
  }, [pictureCode, computerCode]);
  useEffect(() => {
    setGameEnds(score === 3 || score === -3);
  }, [score]);
  console.log(gameEnds);

  console.log(`real Score : ${score}`);
  console.log(title);

  const handleClickOnRock = () => {
    const pcCode = Math.floor(Math.random() * 3 + 1);
    setComputerCode(pcCode);
    setPictureCode(1);
    setIsClicked(true);
  };
  const handleClickOnPaper = () => {
    const pcCode = Math.floor(Math.random() * 3 + 1);
    setComputerCode(pcCode);
    setPictureCode(2);
    setIsClicked(true);
  };
  const handleClickOnScissor = () => {
    const pcCode = Math.floor(Math.random() * 3 + 1);
    setComputerCode(pcCode);
    setPictureCode(3);
    setIsClicked(true);
  };
  return (
    <div>
      {!gameEnds ? (
        <div>
          <Score score={score} />
          {!isClicked ? (
            <div className="startgame">
              <img onClick={handleClickOnPaper} src={paperImg} alt="paper" />
              <img onClick={handleClickOnRock} src={rockImg} alt="rock" />
              <img
                onClick={handleClickOnScissor}
                src={scissorsImg}
                alt="scissors"
              />
            </div>
          ) : (
            <FinalGame
              code={pictureCode}
              setIsClicked={setIsClicked}
              computerCode={computerCode}
              score={score}
              title={title}
            />
          )}
        </div>
      ) : (
        <EndGame
          title={title}
          setGameEnds={setGameEnds}
          setTitle={setTitle}
          setScore={setScore}
          setIsClicked={setIsClicked}
        />
      )}
    </div>
  );
}

export default StartGame;
