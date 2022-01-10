// The isSpecialNumber function accepts a number and must determine 
// whether it is a special number. A number is called special if it includes 
// only 0, 1, 2, 3, 4, or 5.
// The isSpecialNumber function should return the string 'Special!!!' if 
// number is special, and 'NOT!!!' if it is not.

// Notes:
// The number passed to the function is positive (n > 0).
// All single-digit numbers in the interval [0:5] are considered special numbers.

isSpecialNumber(39);

function isSpecialNumber(n) {
    let str = n.toString();
    for (let i = 0; i <= str.length -1; i++) {
        let a = 0;
        a = parseInt(str[i]);
        if (a > 5 || a < 0) {
            console.log('NOT!!');
            return 'NOT!!';
        }
    }
    console.log('Special!!');
    return 'Special!!';
  }