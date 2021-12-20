//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// toCamelCase("the-stealth_warrior"); // return theStealthWarrior || ("A-B-C"); // return ABC
// function toCamelCase(str){
// 	return str.split(/-|_/g).map((w, i) => (i > 0 ? w[0].toUpperCase() : w[0]) + w.slice(1)).join('')
// }
// console.log(toCamelCase('the-stealth_warrior'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//highAndLow("1 9 3 4 -5"); // return "9 -5"
// function highAndLow(numbers){
// 	return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`
// }
// console.log(highAndLow("1 2 -3 4 5"))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//when an array is passed like [19, 5, 42, 2, 77], the output should be 7. No floats or non-positive integers
// function sumTwoSmallestNumbers(arr) {
// 	return arr.sort((a, b) => a - b).slice(0,2).reduce((acc,n) => acc + n)
// /*
// 	const [ a, b ] = numbers.sort((a, b) => a - b)
// 	return a + b
// */
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// maskify("4556364607935616") == "############5616"
// maskify("64607935616") == "#######5616"
// maskify("1") == "1"
// maskify("") == ""

// const test = '1sgsg 45'
// function maskify(cc) {
// 	if (cc.length > 4) {
// 		const last4 = cc.split('').splice(-4,4).join('')
// 		const toMask = cc.substr(0, cc.length-4).replace(/./g,'#')
// 		return `${toMask}${last4}`
// 	}
// 	return cc
// }
// // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
// console.log(maskify(test))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// return the length of the shortest word(s).
// const str = 'bitcoin take over the world maybe who knows perhaps'
// function findShort(s){
// 	return s.split(' ').sort((a,b) => a.length - b.length)[0].length
// 	//return Math.min.apply(null, s.split(' ').map(w => w.length));
// }
// console.log(findShort(str))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// returns a new list with the strings filtered out. filter_list([1,2,'a','b']) == [1,2]
// function filter_list(l) {
// 	return l.filter(el => typeof el !== 'string')
// }
// console.log(filter_list([1,2,'a','b']))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// returns indexes of capital letters in new array ('justForTest') => [4,7]
// function capitalLetters(str) {
// 	return str
// 		.split('')
// 		.map((letter, i) => letter !== letter.toLowerCase() && i)
// 		.filter(letter => letter && letter)
// }
// console.log(capitalLetters('justForTest'))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// returns smallest word in sentence 'Just for test' => 'for'
// function smallestWord(str) {
// 	return str
// 		.split(' ')
// 		.sort((a, b) => a.length - b.length)[0]
// }
// console.log(smallestWord('Just for test'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// returns initials with dots 'Elon Musk' => 'E.M.'
// function initials(str) {
// 	return str
// 		.split(' ')
// 		.map(word => `${word.slice(0,1)}.`)
// 		.join('')
// }
// console.log(initials('Elon Musk'))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sum all numbers (-96) => -3
// function sumDigits(num) {
// 	let nums
// 	if (num < 0) {
// 		nums = num.toString().split('').slice(1)
// 		nums[0] *= -1
// 	} else {
// 		nums = num.toString().split('')
// 	}
// 	return nums.reduce((acc, n) => +acc + +n)
// }
// console.log(sumDigits(-96))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// input [1,2,3]; output [1,2,3,1,2,3]
// let dup = arr =>  [...arr, ...arr]
// console.log(dup([1,2,3]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// input foobar(15); output [1,2,'foo',4,'bar','foo', 7, 8, 'foo', 'bar', 11, 'foo', 13, 14, 'foobar']
// кратно 3 - foo, кратно 5 - foobar, последний foobar
// let foobar = num =>  {
// 	let arr = []
// 	for (let i = 1; i<=num; i++) {
// 		 arr.push(i)
// 	}
// 	for (let i = 1; i<=num; i++) {
// 		if (arr[i] % 3 === 0 && arr[i] !== num) arr[i] = 'foo'
// 		if (arr[i] % 5 === 0 && arr[i] !== num) arr[i] = 'bar'
// 		if (arr[i] === num) arr[i] ='foobar'
// 	}
// 	return arr.join(', ')
// }
// console.log(foobar(23))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// function arrayDiff(a, b) {
// 	const arr = [...a, ...b]
// 	return [...new Set(arr)]
// }

// return a.filter(e => !b.includes(e)

// console.log(arrayDiff([], [4,5]))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) => returns 'Bart, Lisa & Maggie'

// function list(names) {

// 	if (!names.length) return ''
// 	const namesArr = names.map(el => el.name)
// 	const last = namesArr.splice(namesArr.length - 2, 2).join(' & ')
// 	namesArr.push(last)
// 	return namesArr.join(', ')

// 	// var xs = names.map(p => p.name)
// 	// var x = xs.pop()
// 	// return xs.length ? xs.join(", ") + " & " + x : x || ""
// }

// console.log(list([{name: 'Bart'}, {name: 'Lisa Alert'}, {name: 'Maggie'}]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function createPhoneNumber(numbers){
// 	let format = "(xxx) xxx-xxxx";
// 	for (let i = 0; i < numbers.length; i++) {
// 		format = format.replace('x', numbers[i]);
// 	}
// 	return format;
// }
// console.log(createPhoneNumber(arr))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const s = 'Hello {foo} - make me a {bar}';
// const o = {
// 	foo : 'Jack',
// 	bar : 'sandwich'
// };
//
// function format(s, o) {
// 	const foo = s.split(' ')
// 	const is = foo.filter(el => el.startsWith('{'))
// 	is.forEach(el => el.replace('}', ''))
//
//
// 	return is
// }
//
// console.log(format(s, o))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function getDivisors(number) {
// 	return new Array(number)
// 		.fill('')
// 		.map((_,i) => i + 1)
// 		.filter(num => number % num === 0)
// 		.length
// }
// console.log(getDivisors(30))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// expression = ['100', +, 200]
//  “>”, “<”, “=”, “+”, “-”, “*”, “/”
// function checkSign(el) {
// 	switch (el) {
// 		case '+':
// 		case '-':
// 		case '*':
// 		case '/':
// 		case '<':
// 		case '>':
// 		case '=':
// 			return el
// 	}
// }
//
// function checkNum(el) {
// 	if (!isNaN(el)) return +el
// }
//
// function checkExpression(el) {
// 	return checkSign(el) || checkNum(el)
// }
//
// function calculate(arr) {
// 	const operator = arr[1]
// 	switch (operator) {
// 		case '+':
// 			return arr[0] + arr[2]
// 		case '-':
// 			return arr[0] - arr[2]
// 		case '*':
// 			return arr[0] * arr[2]
// 		case '/':
// 			return arr[0] / arr[2]
// 		case '<':
// 			return arr[0] < arr[2]
// 		case '>':
// 			return arr[0] > arr[2]
// 		case '=':
// 			return arr[0] === arr[2]
// 	}
// }
//
// function getMathResult(expression) {
// 	const checked = expression.map(checkExpression).filter(el => el)
// 	console.log(checked)
// 	return calculate(checked)
// }
// console.log(getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4]))

/////////////////////////////////////////////////////////////////////////////////////
// const suspects = {
// 	'James': ['Jacob', 'Bill', 'Lucas'],
// 	'Johnny': ['David', 'Kyle', 'Lucas'],
// 	'Peter': ['Lucy', 'Kyle']
// }
// const dead = ['Lucas', 'Bill']
//
// function getKiller(suspectInfo, deadPeople) {
// 	const arr = []
// 	Object.keys(suspectInfo).forEach(key => {
// 		if (deadPeople.every(name => suspectInfo[key].includes(name))) {
// 			arr.push(key)
// 		}
// 	})
// 	return arr.join('')
// }
// console.log(getKiller(suspects, dead))

// сложное решение------------------------------------------------------------------
// function getKiller(suspectInfo, deadPeople) {
// 	const arr = []
// 	deadPeople.forEach(name => {
// 		Object.keys(suspectInfo).forEach(key => {
// 			suspectInfo[key].includes(name) && arr.push(key)
// 		})
// 	})
// 	const suspects = arr.reduce((tally, name) => {
// 		tally[name] = (tally[name] || 0) + 1
// 		return tally;
// 	}, {})
// 	return (
// 		Object.keys(suspects)
// 			.reduce((a, b) => suspects[a] > suspects[b] ? a : b)
// 	)
// }

///////////////////////////////////////////////////////////////////////////////////

// function checkSign(el) {
// 	switch (el) {
// 		case '+':
// 		case '-':
// 		case '*':
// 		case '/':
// 		case '<':
// 		case '>':
// 		case '=':
// 			return el
// 	}
// }
//
// function checkNum(el) {
// 	if (!isNaN(el)) return +el
// }
//
// function checkExpression(el) {
// 	return checkSign(el) || checkNum(el)
// }
//
// function calculate(arr) {
// 	const operator = arr[1]
// 	switch (operator) {
// 		case '+':
// 			return arr[0] + arr[2]
// 		case '-':
// 			return arr[0] - arr[2]
// 		case '*':
// 			return arr[0] * arr[2]
// 		case '/':
// 			return arr[0] / arr[2]
// 		case '<':
// 			return arr[0] < arr[2]
// 		case '>':
// 			return arr[0] > arr[2]
// 		case '=':
// 			return arr[0] === arr[2]
// 	}
// }
//
// function getMathResult(expression) {
// 	if (expression.length < 3) return alert(`ошибка`)
// 	const checked = expression.map(checkExpression).filter(el => el)
// 	return calculate(checked)
// }
// console.log(getMathResult([1, '=', 1]))
// console.log(getMathResult([1, '+', '100']))
// console.log(getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4]))


		// .map(el => el.toLowerCase())
		// .map(el => el.trim())
		// .map(el => el[0].toUpperCase() + el.substring(1))

/*
const str = "СОЕДИНЕННЫЕ ШТАТЫ АМЕРИКИ, ВЕЛИКОБРИТАНИЯ, РОССИЙСКАЯ ФЕДЕРАЦИЯ"
const splitted = str.split(',').map(el => el.toLowerCase().trim())
const foo = splitted.map(el => {

	if (el.includes(' ')) {
		return el.split(' ').map(el => el[0].toUpperCase() + el.substring(1)).join(' ')
	}
	return el[0].toUpperCase() + el.substring(1)
})
console.log(foo)
*/


// function Animal() {
// 	this.name = 'Ponka'
// }
//
// Animal.prototype.voice = function () {
// 	console.log('from animal', this.name)
// }
//
// const Cat = function (...args) {
// 	Animal.apply(this, args)
// }
// const dog = new Animal()
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.voice = function () {
// 	console.log('from cat', this.name)
// }
//
// const cat = new Cat

const arr = [1,2,3]
console.log()
console.log(arr)