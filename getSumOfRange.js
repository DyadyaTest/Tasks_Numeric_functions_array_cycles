// Add the function getSumOfRange, which takes numbers start, end, and 
//returns the sum of all numbers on the segment from start to end inclusive.

getSumOfRange(-5, 5);

function getSumOfRange(start, end) {
    let a = start;
    let sum = start;
    while(a < end){
       a++;
       sum+=a;    
    }
    console.log(sum);
    return (sum);
  }