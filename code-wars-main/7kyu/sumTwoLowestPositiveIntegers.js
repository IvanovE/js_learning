function sumTwoSmallestNumbers(numbers) {
	const sorted = numbers.sort((a, b) => a - b)
	return sorted[0] + sorted[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
