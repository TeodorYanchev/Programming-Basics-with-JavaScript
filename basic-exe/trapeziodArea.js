function trapeziodArea(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let area = (b1 + b2) * h / 2;
    console.log("Trapezoid area = " + area);

}

trapeziodArea([3, 4, 5])