import { configureStore } from "@reduxjs/toolkit";
import currentAttemptReducer from "./features/currentAttemptSlice";
import gameOverReducer from "./features/gameOverSlice";
import disabledLettersReducer from "./features/disabledLettersSlice";
import almostLettersReducer from "./features/almostLettersSlice";
import correctLettersReducer from "./features/correctLettersSlice";
import correctWordReducer from "./features/correctWordSlice";

export const store = configureStore({
	reducer: {
		currentAttempt: currentAttemptReducer,
		gameOver: gameOverReducer,
		disabledLetters: disabledLettersReducer,
		almostLetters: almostLettersReducer,
		correctLetters: correctLettersReducer,
		correctWord: correctWordReducer,
	},
});
