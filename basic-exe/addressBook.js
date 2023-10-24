function addressBook(data) {
    let book = {};

    for (let el of data) {
        let [name, address] = el.split(":");
        book[name] = address;
    }
    let entries = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}