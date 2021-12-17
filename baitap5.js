// input
var n=12
var resultUnit
var resultTen
var resultAll
// các bước xử lý
resultUnit = n % 10
resultTen = n / 10
resultAll = resultUnit + Math.floor(resultTen)
// output
console.log({resultAll});
