function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);

    let earned = 0;
    let isValidInput = true;

    if (town === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            earned = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            earned = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            earned = sales * 0.08;
        } else if (sales > 10000) {
            earned = sales * 0.12;
        } else {
            isValidInput = false;
        }
    } else if (town === "Varna") {
        if (sales >= 0 && sales <= 500) {
            earned = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            earned = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            earned = sales * 0.10;
        } else if (sales > 10000) {
            earned = sales * 0.13;
        } else {
            isValidInput = false;
        }
    } else if (town === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            earned = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            earned = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            earned = sales * 0.12;
        } else if (sales > 10000) {
            earned = sales * 0.145;
        } else {
            isValidInput = false;
        }
    } else {
        isValidInput = false;
    }

    if (isValidInput) {
        console.log(earned.toFixed(2));
    } else {
        console.log("error");
    }
}