
//This solution solves the even Fibonacci problem
function fiboEvenSum(n) {
    if (n <= 1) {
      return 0
    }
    else {
     
     let evenSum = 0,
  
     prevNum = 1,
     newNum = 2;
   
    for (let i = 2; newNum <= n; i++) {
        if (newNum % 2 == 0) {
          evenSum += newNum;
         }
        //  [prevNum, newNum] = [newNum, prevNum + newNum];
      }
      return evenSum;
    } 
  };