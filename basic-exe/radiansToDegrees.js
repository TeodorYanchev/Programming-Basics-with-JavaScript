function radiansToDegrees(input) {
let rad = Number(input[0]);
let degrees = (rad * 180) / Math.PI;
console.log(Math.round(degrees));
}

radiansToDegrees([3.1416])