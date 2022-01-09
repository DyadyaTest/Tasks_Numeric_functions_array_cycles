// Let's teach our robots how to sort the boxes in the warehouse. All the boxes are numbered,
// and the robots learn to sort them in ascending order.
// But sorting is not easy, sometimes mistakes happen. So in the meantime, we have to 
// check if the robot has sorted the boxes correctly.
// Write an isSorted function that takes an array of boxNumbers and returns true, 
// if all numbers are in ascending order, or false if they are not. The numbers can be repeated.

isSorted([2,1,6,8,9]);

function isSorted(boxNumbers) {
    for (let i=1; i <= boxNumbers.length; i++) {
        if (boxNumbers[i]<boxNumbers[i-1]) {
            return (false);
        }
    }
    return (true);
  }