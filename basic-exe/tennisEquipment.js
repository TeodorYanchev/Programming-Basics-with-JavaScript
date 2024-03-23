function tennisEquipment(input) {

    let oneTennisRacquetPrice = Number(input[0]);
    let tennisRacquetCount = Number(input[1]);
    let numberOfPairsOfSneakers = Number(input[2]);

    let sumRacquetAndSneakers = tennisRacquetCount * oneTennisRacquetPrice + numberOfPairsOfSneakers * (1 / 6 * oneTennisRacquetPrice);
    let extraEquipment = 0.2 * sumRacquetAndSneakers;
    let totalPrice = sumRacquetAndSneakers + extraEquipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(1 / 8 * totalPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(7 / 8 * totalPrice)}`);
}

tennisEquipment(['386', '7', '4']);