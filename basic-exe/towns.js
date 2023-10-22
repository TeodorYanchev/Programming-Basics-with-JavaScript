function towns(input) {
    for (const townInfo of input) {
        let [townName, latitude, longitude] = townInfo.split(' | ');
        let currentTown = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(currentTown);
    }
}