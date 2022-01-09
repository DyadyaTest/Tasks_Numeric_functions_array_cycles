// Write a createArray function that takes an integer N
// and returns an array containing all integers from 1 to N inclusive.
// If N = 0, return an empty array.

createArray(5);

function createArray(N) {
    const num = [];
  for (let i = 0; i <= N; i++) {
    num.push(i);
  }
if (N = ' ') {
  num.shift();
  console.log(num);
  return (num);
} else {
    console.log(num);
  return num;
}
}
