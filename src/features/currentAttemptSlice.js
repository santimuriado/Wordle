import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	attempt: 0,
	letterPos: 0,
};

const currentAttemptSlice = createSlice({
	name: "currentAttempt",
	initialState,
	reducers: {
		increaseAttempt: (state) => {
			state.attempt = state.attempt + 1;
		},
		resetAttempt: (state) => {
			state.attempt = 0;
		},
		increaseLetterPos: (state) => {
			state.letterPos = state.letterPos + 1;
		},
		decreaseLetterPos: (state) => {
			state.letterPos = state.letterPos - 1;
		},
		resetLetterPos: (state) => {
			state.letterPos = 0;
		},
	},
});

export const {
	increaseAttempt,
	resetAttempt,
	increaseLetterPos,
	decreaseLetterPos,
	resetLetterPos,
} = currentAttemptSlice.actions;
export default currentAttemptSlice.reducer;
