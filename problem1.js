function multiplesOf3and5(number) {
    let arr = [];
    for (let num = 1; num < number; num ++){
        if (num % 3 == 0 || num % 5 == 0){
        // if (){
            arr.push(num);
            var newArr = arr.reduce(function (a,b) {return a + b });
           
        }
        
      
    }
    console.log(newArr);
    
}

multiplesOf3and5(1000);