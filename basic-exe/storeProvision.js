function storeProvision(firstArray, secondArray) {
    let localStoreStorage = {};

    for (let index = 0; index < firstArray.length; index += 2) {

        let product = firstArray[index];
        let quantity = Number(firstArray[index + 1]);

        localStoreStorage[product] = quantity;
    }

    for (let index = 0; index < secondArray.length; index += 2) {
        let product = secondArray[index];

        if (!localStoreStorage.hasOwnProperty(product)) {
            localStoreStorage[product] = 0;
        }

        localStoreStorage[product] += Number(secondArray[index + 1]);
    }

    for (const productKey in localStoreStorage) {
        console.log(`${productKey} -> ${localStoreStorage[productKey]}`);
    }
}