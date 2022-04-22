import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	almostLetters: [],
};

const almostLettersSlice = createSlice({
	name: "almostLetters",
	initialState,
	reducers: {
		addAlmostLetter: (state, action) => {
			state.almostLetters.push(action.payload);
		},
		removeAlmostLetters: (state) => {
			state.almostLetters = [];
		},
	},
});

export const { addAlmostLetter, removeAlmostLetters } =
	almostLettersSlice.actions;
export default almostLettersSlice.reducer;
