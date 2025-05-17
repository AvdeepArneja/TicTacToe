
import { useState } from "react"
import { CalculateWinner } from "./CalculateWinner";

export function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = CalculateWinner(squares);

  function handleMove(index) {
    if (squares[index] || winner) {
      return;
    }

    const newSquare = [...squares];
    newSquare[index] = isXTurn ? "X" : "O";
    setSquares(newSquare);
    setIsXTurn(!isXTurn);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="w-[320px] h-[300px] gap-2 flex flex-wrap">
        {squares.map((square, index) => (
          <button
            key={index}
            className="bg-gray-800 text-white text-3xl font-bold rounded-2xl w-[100px] h-[100px] hover:bg-gray-700 transition-colors duration-200"
            onClick={() => handleMove(index)}
          >
            {square}
          </button>
        ))}
      </div>

      {winner && (
        <h2 className="mt-4 text-green-500 text-xl font-semibold">
          Winner: {winner === "X" ? "Player 1 Wins" : "Player 2 Wins"}
        </h2>
      )}
    </div>
  );
}
