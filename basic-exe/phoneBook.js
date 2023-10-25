function phoneBook(data) {
    let phoneBook = {}

    for (let el of data) {
        let [name, number] = el.split(" ");
        phoneBook[name] = number;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}