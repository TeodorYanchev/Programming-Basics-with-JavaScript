function cinema(input) {
    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let places = rows * cols;
    let income = 0;

    if(projectionType === 'Premiere') {
        income = places * 12.00;
    } else if(projectionType === 'Normal') {
        income = places * 7.50;
    } else {
        income = places * 5.00;
    } 
    console.log(`${income.toFixed(2)} leva`);

}

cinema(["Premiere",
"10",
"12"])
