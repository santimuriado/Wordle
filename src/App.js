/* TODO: Make the gameOver stats a popup.*/

import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import { React, useState, createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameOver from "./components/GameOver";
import {
	increaseAttempt,
	increaseLetterPos,
	decreaseLetterPos,
	resetLetterPos,
} from "./features/currentAttemptSlice";
import { setGameOver, setGuessedWord } from "./features/gameOverSlice";
import { setCorrectWord } from "./features/correctWordSlice";

export const AppContext = createContext();

function App() {
	const { attempt, letterPos } = useSelector((store) => store.currentAttempt);
	const { gameOver } = useSelector((store) => store.gameOver);
	const { correctWord } = useSelector((store) => store.correctWord);
	const dispatch = useDispatch();
	const [board, setBoard] = useState(boardDefault);
	const [wordSet, setWordSet] = useState(new Set());

	useEffect(() => {
		generateWordSet().then((words) => {
			setWordSet(words.wordSet);
			dispatch(setCorrectWord(words.todaysWord));
		});
	}, []);

	const onSelectLetter = (keyVal) => {
		if (letterPos > 4) return;
		const currentBoard = [...board];
		currentBoard[attempt][letterPos] = keyVal;
		setBoard(currentBoard);
		dispatch(increaseLetterPos());
	};
	const onDelete = () => {
		if (letterPos === 0) return;
		const currentBoard = [...board];
		currentBoard[attempt][letterPos - 1] = "";
		setBoard(currentBoard);
		dispatch(decreaseLetterPos());
	};
	const onEnter = () => {
		if (letterPos !== 5) return;

		let currWord = "";
		for (let i = 0; i < 5; i++) {
			currWord += board[attempt][i];
		}

		if (wordSet.has(currWord.toLowerCase())) {
			dispatch(increaseAttempt());
			dispatch(resetLetterPos());
		} else {
			alert("Word not found");
		}

		if (currWord.toLowerCase() === correctWord) {
			dispatch(setGameOver());
			dispatch(setGuessedWord());
			return;
		}
		if (attempt === 5) {
			dispatch(setGameOver());
		}
	};
	return (
		<div className="App">
			<nav>
				<h1>Wordle</h1>
			</nav>
			<AppContext.Provider
				value={{
					board,
					setBoard,
					onSelectLetter,
					onDelete,
					onEnter,
				}}>
				<div className="game">
					<Board />
					{gameOver ? <GameOver /> : <Keyboard />}
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
