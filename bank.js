//------Calculate profit (user specifies investment amount, interest, term)----
//-----We need to print the amount of profit for the whole period 
function calculateProfit(amount, percent, period) {
    let answer = amount;
    for ( let i = 0; i < period; i++) {
        console.log(answer - amount)
      answer = answer + (answer * percent / 100);
      }
      const res = Math.round(answer - amount);
      console.log('result ' + res);
      return (res);
  }
  calculateProfit(10000,4,3)