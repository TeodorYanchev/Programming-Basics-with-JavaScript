function condenseArrayToNumber(num) {
    let res = [];

    while (num.length > 1) {
        for (let index = 0; index < num.length; index++) {
          res[index] = num[index] + num[index + 1];   
        }
        num = res;
        res = [];
    }
    console.log(num);
}