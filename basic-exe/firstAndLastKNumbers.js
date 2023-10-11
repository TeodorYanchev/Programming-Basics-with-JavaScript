function firstAndLastKNumbers(data) {
    let k = data.shift();
    let firstK = data.slice(0, k);
    let lastK = data.slice(data.length - k);
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}