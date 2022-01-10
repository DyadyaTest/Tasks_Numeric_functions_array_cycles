// Robots tested. Slow robots sent for upgrade. Mate Post 
// wants to buy a dozen robots from us to deliver goods around the city. In order to do that. 
// they need the robots that will carry the most cargo in a day.
// Let's write a compareRobots function that gets two arrays. The first one is 
// firstRobotResults array is the weights of cargo moved during the day by the first 
// robot, the secondRobotResults array is the second one.
// Check which of the robots has carried more weight, and return the string with a recommendation, 
// which of the robots is worth buying

compareRobots([12, 4, 13], [1, 1, 4, 5, 12]);

function compareRobots(firstRobotResults, secondRobotResults) {
    let first = 0;
    let second = 0;
    let result = '';
    for (let i = 0; i <= firstRobotResults.length -1; i++) {
        first += firstRobotResults[i];
        console.log(first);
    };
    for (let i = 0; i <= secondRobotResults.length -1; i++) {
        second += secondRobotResults[i];
        console.log(second);
    };
    if (first > second) {
        result = 'First robot for sale!';
    };
    if (first < second) {
        result = 'Second robot for sale!';
    };
    if (first === second) {
        result = 'Both robots for sale!';
    };
    console.log(result);
    return result;
}
