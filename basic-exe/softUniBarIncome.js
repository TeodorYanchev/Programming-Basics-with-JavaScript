function softUniBarIncome(input) {
 
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;
    let i = 0;
 
    let result = 0;
    while (input[i] !== 'end of shift') {
        let line = input[i];
        let match = [...line.matchAll(pattern)];
 
        for (const el of match) {
            let prices = Number(el.groups.quantity) * Number(el.groups.price);
 
            result += prices;
            console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
        }
 
        i++;
 
    }
 
    console.log(`Total income: ${result.toFixed(2)}`);
 
}