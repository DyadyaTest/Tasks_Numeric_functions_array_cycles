// So, when all the processes are set up, you have to set yourself the right 
// goals. Our robots are the best on the market, so we have to increase our turnover and 
// increase production.
// Write a getPlan function that returns an array with goals for a given number of 
// numberOfMonths. Right now, we are producing startProduction robots per month 
// and want that number to grow by a given percentage every month.
// If the number of robots turns out to be a fraction, round it down (Math.floor(value)). 
// Calculate the target for the next month based on the previous month.

getPlan(200,3,50);

function getPlan(startProduction, numberOfMonths, percent) {
    let goals = [];
    let currentProdaction = startProduction;

    for (let i = 0; i <= numberOfMonths - 1; i++) {
        goals[i] = Math.floor(currentProdaction + currentProdaction * percent / 100);
        currentProdaction = goals[i];
    }
    console.log(goals);
    return goals; 
}
