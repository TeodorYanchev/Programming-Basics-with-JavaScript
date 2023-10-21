function inventory(input) {
    let result = [];

    for (const line of input) {

        let [name, level, items] = line.split(" / ");

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        result.push(hero);
    }

    result.sort((a, b) => a.level - b.level);

    for (const heroObject of result) {
        console.log(`Hero: ${heroObject.name}`);
        console.log(`level => ${heroObject.level}`);
        console.log(`items => ${heroObject.items}`);
    }
}