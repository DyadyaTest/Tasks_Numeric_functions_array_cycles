// Turn an array of numbers into a phone number format string.

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])

function createPhoneNumber(numbers){
    let buff = '';
    let result= '';
    
    for (let i = 0; i <= numbers.length - 1; i++) {
      buff += numbers[i];
      console.log(buff);
    }
    result = '(' + buff.substr(0,3) + ') ' + buff.substr(3,3) + '-' + buff.substr(6,4);
    console.log(result);
    return (result); // (123) 456-7890
  }