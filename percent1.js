// ----Count what percentage of units in the string

getSuccessRate('101010')
function getSuccessRate(statistic) {
    let totalnum = 0;
    let sucnum = 0;
    let result;
    if (statistic === ' '){
      return (0);
    } else {
    for (let i = 0; i <= statistic.length - 1; i++){
    totalnum += 1;
    console.log(totalnum);
    if (statistic[i] === '1') {
        sucnum += 1;
    console.log(sucnum);
    }
    }
    result = sucnum/(totalnum / 100);
    let res = Math.round(result);
    console.log(res + '%');
    return res;
  }
  }
