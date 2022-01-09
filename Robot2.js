// Are the stickers ready? Okay, we need to increase the productivity of our lines 
// twice as much! Before, we only made popcorn there.
// Write a doublePower function that takes the array of currentPowers 
// and returns a new array of doubled powers.

doublePower([100, 150 , 200, 220]);
function doublePower(currentPowers) {
    const reserv = [];
    for (let i = 0; i <= currentPowers.length-1; i++) {
        console.log(i);
        reserv.push(currentPowers[i]*2);
    }
    console.log(reserv);
    return reserv;
}
