import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	correctLetters: [],
};

const correctLettersSlice = createSlice({
	name: "correctLetters",
	initialState,
	reducers: {
		addCorrectLetter: (state, action) => {
			state.correctLetters.push(action.payload);
		},
		removeCorrectLetters: (state) => {
			state.correctLetters = [];
		},
	},
});

export const { addCorrectLetter, removeCorrectLetters } =
	correctLettersSlice.actions;
export default correctLettersSlice.reducer;
