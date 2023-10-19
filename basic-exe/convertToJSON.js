function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }
    let str = JSON.stringify(obj);
    console.log(str);
}