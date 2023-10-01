function reverseAnArrayOfNumbers(n, arr) {
    let res = [];

    for(let i = 0; i < n; i++) {
        res.push(arr[i])
    }

    let reverseArr = [];
    for(let i = res.length - 1;i >=0; i-- ){
        reverseArr.push(res[i]);
    }

    console.log(reverseArr.join(" "));
}