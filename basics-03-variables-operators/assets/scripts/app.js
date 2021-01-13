const defaultResult = 0;
let currentResult = defaultResult;
let secondResult = currentResult;

currentResult = (currentResult + 10) * 5 / 2 - 1;

secondResult = (currentResult + 12) % 3 * 4

let calculationDescription = '(' + defaultResult + ' + 10) * 5 / 2 - 1';

let calculationDescription2 = '(' + currentResult + '+ 12) % 3 * 4';

outputResult(secondResult, calculationDescription2);