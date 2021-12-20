function createPhoneNumber(numbersArr){
	let format = '(xxx) xxx-xxxx'
	for (let i = 0; i < numbersArr.length; i++) {
		format = format.replace('x', numbersArr[i])
	}
	return format
}


function createPhoneNumber2(numbers){
	return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

