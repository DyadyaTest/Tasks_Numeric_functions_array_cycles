// Implement the getArraysSum function, which takes two arrays of numbers 
// the same length, and returns the sum of all elements of these arrays.

getArraysSum([1, 2], [3, 4]);

function getArraysSum(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for ( let i = 0; i <= arr1.length -1; i++) {
        sum1 += arr1[i];
        console.log('sum1 '+ sum1)
    }
    for (let i = 0; i <= arr2.length -1; i++) {
        sum2 += arr2[i];
        console.log('sum2 '+ sum2)
    }
    let result = sum1 + sum2;
    console.log('result '+ result)
    return result;
  }