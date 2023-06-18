function numbersDivisibleBy9(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let buff = '';

    for(let i = startNum; i <= endNum; i++){
        if(i % 9 === 0){
            sum += i;
            buff += i + "\n"
        }
    }
     console.log("The sum: " + sum);
     console.log(buff);
}

numbersDivisibleBy9(["100", "200"])