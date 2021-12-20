const randomMaxMin = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}

const randomMaxMin1 = (minValue, maxValue) => {
  return Math.random() * (maxValue - minValue) + minValue
}

console.log(randomMaxMin(100, 500))
console.log(randomMaxMin(500, 1000))
console.log(randomMaxMin(1, 5))
