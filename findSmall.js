// Write a function that returns the smallest number in the passed array.

findSmallestElement([4, 2, 5, 3, 2, 6, 1])

function findSmallestElement(numbers) {
    let a = numbers[0];
    for (let i = 1; i <= numbers.length - 1; i++) {
        
        if (a > numbers[i]) {
            a = numbers[i];
        }
    }
    console.log(a);
    return a;
  }