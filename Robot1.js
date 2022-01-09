// It's time to start mass production of robots! For 
// robots on the line are assembled correctly, you need to label the parts. 
// Different parts of the robot will consist of different numbers of parts. Let's make stickers for them!
// Write a program for the makeStickers printer that takes 
// number detailsCount and the string robotPart. The function should return 
// an array of strings in the following format: {{partOfRobot}} detail #{{{n}}
// If detailsCount = 0, return an empty array.

makeStickers(5, 'Body');
function makeStickers(detailsCount, robotPart) {
  const partOfRobot = [];
  if (detailsCount == 0) {
    return partOfRobot;
    } else {
  for ( let i = 1; i <= detailsCount; i++) {
    partOfRobot.push(robotPart +' detail #'+ i);
  } 
  console.log(partOfRobot);
    return partOfRobot;
}
}
