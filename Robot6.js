// The first batch of robots is ready, now they must be tested. All robots are unique, so 
// the speed of movement is different for each robot. We have to determine the minimum, maximum, and average 
// the robots' speed.
// Our server gets an array of testResults robot speeds, passes it through the 
// getSpeedStatistic function and returns the statistics in an array.
// The first element of the resulting array is the slowest speed
// second element is the highest speed
// the third is average speed rounded down

getSpeedStatistic([3, 5, 7, 2, 6, 9, 3]);

function getSpeedStatistic(testResults) {
    if (testResults.length === 0 ) {
        return (result = [0, 0, 0]);
    };
    let result = [];
    let max = testResults[0];
    let min = testResults[0];
    for (let i = 0; i <= testResults.length - 1; i++) {
        let sum = testResults[i];
        if (sum > max) {
            max = sum;
            console.log('max ' + max);
        };
        if (sum < min) {
            min = sum;
            console.log('min ' + min);
        };
    }
     let avarage = Math.floor((max+min)/2);
     console.log('avarage ' + avarage);
     result[0] = min;
     result[1] = max;
     result[2] = avarage;
     console.log('result ' + result);
     return result; 
  }
