import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	correctWord: "",
};

const correctWordSlice = createSlice({
	name: "correctWord",
	initialState,
	reducers: {
		setCorrectWord: (state, action) => {
			state.correctWord = action.payload;
			console.log(action.payload);
		},
	},
});

export const { setCorrectWord } = correctWordSlice.actions;
export default correctWordSlice.reducer;
