function rightPlace(string, symbol, c) {
    let newStr = string.replace("_", symbol);

    if(newStr ===c) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}