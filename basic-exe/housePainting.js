function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wall = x * y;
    let window = 1.5 * 1.5;
    let sides = (2 * wall) - (2 * window);
    let backWall = x * x;
    let entrance = 1.2 * 2;
    let totalBackAndFront = backWall * 2 -entrance;
    let total = sides + totalBackAndFront;
    let greenPaint = total / 3.4;
    console.log(greenPaint.toFixed(2));


    let rectangleRoof = 2 * (x * y);
    let trianglesRoof = 2 * (x * h / 2);

    let totalRedRoof = rectangleRoof + trianglesRoof;
    let redPaint = totalRedRoof / 4.3;
    console.log(redPaint.toFixed(2));

}

housePainting(["6",
    "10",
    "5.2"
    ])