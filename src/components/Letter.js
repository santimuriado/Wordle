import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { addCorrectLetter } from "../features/correctLettersSlice";
import { addAlmostLetter } from "../features/almostLettersSlice";
import { addDisabledLetter } from "../features/disabledLettersSlice";
import { useDispatch, useSelector } from "react-redux";

function Letter({ letterPos, attemptVal }) {
	const dispatch = useDispatch();
	const { attempt } = useSelector((store) => store.currentAttempt);
	const { correctWord } = useSelector((store) => store.correctWord);
	const { board } = useContext(AppContext);
	const letter = board[attemptVal][letterPos];

	const correct = correctWord.toUpperCase()[letterPos] === letter;
	const almost =
		!correct && letter !== "" && correctWord.toUpperCase().includes(letter);

	const letterState =
		attempt > attemptVal &&
		(correct ? "correct" : almost ? "almost" : "error");

	useEffect(() => {
		if (letter !== "" && correct && !almost) {
			dispatch(addCorrectLetter(letter));
		}
		if (letter !== "" && !correct && almost) {
			dispatch(addAlmostLetter(letter));
		}
		if (letter !== "" && !correct && !almost) {
			dispatch(addDisabledLetter(letter));
		}
	}, [attempt]);

	return (
		<div className="letter" id={letterState}>
			{letter}
		</div>
	);
}

export default Letter;
