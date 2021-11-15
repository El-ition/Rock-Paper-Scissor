import gameLogo from '../images/logo.svg';

function Score({ score }) {
  return (
    <div className="score">
      <img src={gameLogo} alt="logo" />
      <div className="score__detail">
        <h3>score</h3>
        <h2>{score}</h2>
      </div>
    </div>
  );
}

export default Score;
