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
			let wordArray = result.split(/[\r\n]/);
			const results = wordArray.filter((element) => {
				return element !== "";
			});
			todaysWord = results[Math.floor(Math.random() * results.length)];
			wordSet = new Set(results);
		});

	return { wordSet, todaysWord };
};
