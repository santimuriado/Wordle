import wordBank from "./wordle-bank.txt";
import axios from "axios";

export const boardDefault = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

export const generateWordSet = async () => {
	let wordSet;
	let todaysWord;

	await axios
		.get(wordBank)
		.then((response) => response.data)
		.then((result) => {
			const wordArray = result.split("\n");
			todaysWord =
				wordArray[Math.floor(Math.random() * wordArray.length)];
			wordSet = new Set(wordArray);
		});

	return { wordSet, todaysWord };
};
