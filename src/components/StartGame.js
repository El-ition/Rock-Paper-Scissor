import { useEffect, useRef, useState } from 'react';
import FinalGame from './FinalGame';
import paperImg from '../images/icon-paper.svg';
import rockImg from '../images/icon-rock.svg';
import scissorsImg from '../images/icon-scissors.svg';
import Score from './Score';

function StartGame() {
  const [pictureCode, setPictureCode] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [computerCode, setComputerCode] = useState(null);
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState('');

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
      <Score score={score} />
      {!isClicked ? (
        <div>
          <img onClick={handleClickOnPaper} src={paperImg} alt="paper" />
          <img onClick={handleClickOnRock} src={rockImg} alt="rock" />
          <img
            onClick={handleClickOnScissor}
            src={scissorsImg}
            alt="scissors"
          />
          {/* <button onClick={initialCompCode}>rand</button> */}
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
  );
}

export default StartGame;
