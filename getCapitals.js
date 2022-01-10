// Write a getCapitals function, which takes a string text, and returns 
// an array of all capital letters found in text in order of appearance.

getCapitals('1234M5678A9');

function getCapitals(string) {
    const result = [];
  
    const buffer = string.replace(/\d/g, '');
  
    for (let i = 0; i <= buffer.length - 1; i++) {
      const a = buffer[i];
  
      if (a === a.toUpperCase()) {
        if (a !== ' ' && a !== '.' && a !== ',' && a !== '!' && a !== '?') {
            result.push(a);
        }
      }
    }
    console.log(result);
    return (result);
}
