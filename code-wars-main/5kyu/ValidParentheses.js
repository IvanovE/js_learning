/*
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
())(() =>  false
*/

function validParentheses(parens) {
	if (parens[0] === ')') return false
	if (parens[parens.length - 1] === '(') return false
	let left = 0
	let right = 0
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') left++
		if (parens[i] === ')') right++
		if (right > left) return false
	}

	return left === right
}


function validParentheses1(parens){
	let n = 0;
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') n++;
		if (parens[i] === ')') n--;
		if (n < 0) return false;
	}

	return n === 0;
}

function validParentheses2(parens){
	var re = /\(\)/;
	while (re.test(parens)) parens = parens.replace(re, "");
	return !parens;
}
