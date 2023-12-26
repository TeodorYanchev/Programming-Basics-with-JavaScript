function sumFirstAndLast(arr) {
   let firstElement = Number(arr.shift());
   let lastElement = Number(arr.pop());
   let sum = firstElement + lastElement;
   return sum;
    // if (arr.length === 1) {
    //     return console.log(Number(arr.toString()));
    // }

    // let sum = Number(arr.shift()) + Number(arr.pop());
    // console.log(sum);

    // let first = arr.shift();
    // let last = arr.pop();

    // console.log(Number(first) + Number(last));
}

sumFirstAndLast(['20', '30', '40'])