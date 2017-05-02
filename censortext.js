function censor(inSrt){
	for(idx in censoredWords){
		inSrt = inSrt.replace(censoredWords[idex], "****");
	}
	for(idx in customCensoredWords){
		inSrt = inSrt.replace(customCensoredWords[idx], "****");
	}
	return inSrt;
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;