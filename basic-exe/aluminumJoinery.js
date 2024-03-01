function aluminumJoinery(input) {

    let broiDogrami = Number(input[0]);
    let vidNaDogramite = input[1];
    let nachinNaPoluchavane = input[2];

    if (broiDogrami < 10) {
        console.log("Invalid order");
        return;
    }

    let edinichnaCenaDograma = 0;
    let priceAfterDiscount = 0;

    if (vidNaDogramite === '90X130') {
        edinichnaCenaDograma = 110;
    } else if (vidNaDogramite === '100X150') {
        edinichnaCenaDograma = 140;
    } else if (vidNaDogramite === '130X180') {
        edinichnaCenaDograma = 190;
    } else if (vidNaDogramite === '200X300') {
        edinichnaCenaDograma = 250;
    }

    let price = edinichnaCenaDograma * broiDogrami;
    let discount = 0;

    if (broiDogrami >= 30 && vidNaDogramite === '90X130') {
        discount = 0.05 * price;
    } else if (broiDogrami >= 60 && vidNaDogramite === '90X130') {
        discount = 0.08 * price;
    } else if (broiDogrami >= 40 && vidNaDogramite === '100X150') {
        discount = 0.06 * price;
    } else if (broiDogrami >= 80 && vidNaDogramite === '100X150') {
        discount = 0.1 * price;
    } else if (broiDogrami >= 20 && vidNaDogramite === '130X180') {
        discount = 0.07 * price;
    } else if (broiDogrami >= 50 && vidNaDogramite === '130X180') {
        discount = 0.12 * price
    } else if (broiDogrami >= 25 && vidNaDogramite === '200X300') {
        discount = 0.09 * price;
    } else if (broiDogrami >= 50 && vidNaDogramite === '200X300') {
        discount = 0.14 * price;
    }
    priceAfterDiscount = price - discount;
    if (nachinNaPoluchavane === 'With delivery') {
        priceAfterDiscount += 60;
    }

    if (broiDogrami > 99) {
        priceAfterDiscount = priceAfterDiscount - (0.04 * priceAfterDiscount);
    }

    console.log(`${priceAfterDiscount.toFixed(2)} BGN`);
}

aluminumJoinery(["105",
    "100X150",
    "With delivery"])