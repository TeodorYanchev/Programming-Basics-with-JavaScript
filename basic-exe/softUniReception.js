function softUniReception(input) {
    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let people = Number(input.shift());

    let answersPerHour = employeeOne + employeeTwo + employeeThree;
    let neededHour = 0;

    while (people > 0) {
        neededHour++;
        people -= answersPerHour;

        if (neededHour % 4 === 0) {
            neededHour++;
        }
    }

    console.log(`Time needed: ${neededHour}h.`);
}