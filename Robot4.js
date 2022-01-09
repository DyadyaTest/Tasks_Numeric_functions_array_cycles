// Our robot knows how to convert motion commands into a correct signal and move according to it:
// 'forward' means y + 1
// 'back' means y - 1
// 'right' means x + 1
// 'left' means x - 1
// It would be nice if the robot knew where it is now even without GPS.
// Write a getLocation function that takes an array of initial coordinates coordinates (in the form of [x, y]) 
// And an array of command history commands.
// The function should return an array of final coordinates of the robot in the same format ([x, y]) after movements 
// according to commands from commands.

function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];
    for (let i = 0; i <= commands.length - 1; i++)
     if (commands[i] === 'forward') {
        console.log(commands[i]);
        y += 1;
     } else { 
         if (commands[i] === 'back') {
            console.log(commands[i]);
        y -= 1;
     } else {
        if (commands[i] === 'right') {
            console.log(commands[i]);
        x += 1;
     } else {
        if (commands[i] === 'left') {
            console.log(commands[i]);
        x -= 1;
     }
    }
    }
    }
    coordinates[0] = x;
    coordinates[1] = y;
    console.log(coordinates);
    return coordinates;
  }
  getLocation([0, 0],['back', 'back', 'right', 'left', 'forward'])
