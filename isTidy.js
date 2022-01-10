// Let's check if all our numbers are "neat" and all the digits of the number are in 
// the right order. The order is correct when all digits of a number are in // non-decreasing sequence. 
// in a non-decreasing sequence.

// Create an isTidy function that takes number as a parameter and // should output the result true if 
// should print the result true if the digits are in non-decreasing order, 
// or false if not.

// Note: Input values are always positive.

isTidy(3445);

function isTidy(number) {
    
    let str = number.toString();
    for (let i = 0; i <= str.length -2; i++) {
    let a = (str[i]);
        a = parseInt(a);
    let b = str[i+1];
        b = parseInt(b);
       if (a > b) { 
            return (false);
         };
    }
    return (true);
}
