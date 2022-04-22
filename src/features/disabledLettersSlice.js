import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	disabledLetters: [],
};

const disabledLettersSlice = createSlice({
	name: "disabledLetters",
	initialState,
	reducers: {
		addDisabledLetter: (state, action) => {
			state.disabledLetters.push(action.payload);
		},
		removeDisabledLetters: (state) => {
			state.disabledLetters = [];
		},
	},
});

export const { addDisabledLetter, removeDisabledLetters } =
	disabledLettersSlice.actions;
export default disabledLettersSlice.reducer;
