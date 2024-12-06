import Dice from "./Dice";
import '../styles/Board.css'
function Board({ name, gamehistory, color }) {

  const num = gamehistory[gamehistory.length - 1] || 1;
  const sum = gamehistory.reduce((sum,i)=>sum+1,0)
  return (
    <div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h3>총점</h3>
      <p>{sum}</p>
      <h3>기록</h3>
      <p>{gamehistory.join(", ")}</p>
    </div>
  );
}

export default Board;
