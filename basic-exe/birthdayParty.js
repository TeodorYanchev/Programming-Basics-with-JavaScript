function birthdayParty(input) {

    let hallRental = Number(input[0]);
    let cake = 0.2 * hallRental;
    let drinks = 0.55 * cake;
    let entertainer = 1/3 * hallRental;

    let totalPrice = hallRental + cake + drinks + entertainer;
    console.log(totalPrice);
}

birthdayParty(['2250'])