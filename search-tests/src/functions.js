import numbers from './numbers';

function linear(numArr, num) {
    let string = '';
    for (let i = 0; i < numArr.length; i++) {
        if (num == numArr[i]) {
            return `Found it in ${i+1} tries`;
        }
       string = `Try number ${i + 1}`;
    }
    return string;
}

let sortedArr = numbers.sort();

function binary(numArr, num, start = 0, end = sortedArr.length -1, count = 1) {
    console.log(numArr)
    if (start === end) {
        return 'Number not in dataset';
    }
    else {
        let middle = Math.floor(numArr.length / 2);
        if (numArr[middle] === num) {
            return `Found it in ${count} tries`
        }
        else if (num < numArr[middle] ) {
            binary(num, start, (middle - 1), (count + 1))
        }
        binary(num, (middle + 1), end, (count + 1)) 
    }
    return `Try number ${count}`
}

function calculateResults(num) {
  return {
    linearResults: linear(numbers, num),
    binaryResults: binary(sortedArr, num)
  }
}

export default calculateResults;
