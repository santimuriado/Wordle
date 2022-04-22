import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	gameOver: false,
	guessedWord: false,
};

const gameOverSlice = createSlice({
	name: "gameOver",
	initialState,
	reducers: {
		setGameOver: (state) => {
			state.gameOver = !state.gameOver;
		},
		setGuessedWord: (state) => {
			state.guessedWord = !state.guessedWord;
		},
	},
});

export const { setGameOver, setGuessedWord } = gameOverSlice.actions;

export default gameOverSlice.reducer;
