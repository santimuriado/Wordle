import React from "react";
import { useSelector } from "react-redux";

function GameOver() {
	const { attempt } = useSelector((store) => store.currentAttempt);
	const { guessedWord } = useSelector((store) => store.gameOver);
	const { correctWord } = useSelector((store) => store.correctWord);
	return (
		<div className="gameOver">
			<h3>{guessedWord ? "Correctly guessed" : "Failed"}</h3>
			<h1>Correct Word: {correctWord}</h1>
			{guessedWord && <h3>You guessed in {attempt} attempts</h3>}
		</div>
	);
}

export default GameOver;
