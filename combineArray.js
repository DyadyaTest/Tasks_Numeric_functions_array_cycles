// Implement the combineArrays function, which takes two arrays of numbers 
// (first and second) and returns an array of numbers where N[i] is the sum of numbers 
// first[i] and second[i].

// Notes:
// Input arrays are always the same size.

combineArrays([1, 2, 5], [3, 6, 1]);

function combineArrays(first, second) {
    let result = [];
    for (let i = 0; i <= first.length -1; i++) {
        result[i] = first[i] + second[i];
        console.log('result [' + result[i] + ']');
    }
    console.log(result);
    return result;
}
