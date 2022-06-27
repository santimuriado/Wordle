import wordBank from "./wordle-bank.txt";

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

	await fetch(wordBank)
		.then((response) => response.text())
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
