function EndGame({ title, setScore, setTitle, setGameEnds, setIsClicked }) {
  const handleReset = () => {
    setScore(0);
    setTitle('');
    setGameEnds(false);
    setIsClicked(false);
  };
  return (
    <div>
      <h1>{title}</h1>
      {title === 'You Win!!' && (
        <h2>you beat computer OMG!!!! you are hero!🥇</h2>
      )}
      {title === 'You Lose!' && (
        <h2>Oh noo! maybe the computer is cheating!!😢 </h2>
      )}
      <button onClick={handleReset}>Go for another round!</button>
    </div>
  );
}

export default EndGame;
