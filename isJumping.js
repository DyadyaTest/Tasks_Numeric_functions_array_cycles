// Implement the isJumping function, which takes a number and returns 
// the string JUMPING, if each digit in the number differs from the neighboring one by 1. 
// If the condition is not fulfilled - the string NOT JUMPING.

//Notes:

// The input number is always positive.
// The difference between 9 and 0 is not 1
// All numbers which consist of one digit - JUMPING

isJumping(26454);

function isJumping(number) {
    let str = number.toString();
    for (let i = 0; i <= str.length -2; i++) {
        let a = (str[i]);
        a = parseInt(a);
        a += 1;
        let b = str[i+1];
        b = parseInt(b);
        if (a !== b) { 
            if (a-2 !== b) { 
                console.log('NOT JUMPING');
                return ('NOT JUMPING');
            };
        };
    }
    console.log('JUMPING');
    return ('JUMPING');
  }