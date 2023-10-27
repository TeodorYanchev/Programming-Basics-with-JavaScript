function piccolo(input) {

    let parking = new Set();
    for (const entry of input) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parking.add(carNumber);
        } else if (direction === 'OUT') {
            parking.delete(carNumber);
        }
    }
    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCarNumber = Array.from(parking).sort((a, b) => a.localeCompare(b));
        sortedCarNumber.forEach(carNumber => console.log(carNumber));
    }

}