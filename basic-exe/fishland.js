function fishland(input){
    let skumriqCena = Number(input[0]);
    let cacaCena = Number(input[1]);
    let kilogramPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);



let PalamudCena = (skumriqCena + (skumriqCena * 0.60)) * kilogramPalamud;
let cenaSafrid = (cacaCena + (cacaCena * 0.80)) * kgSafrid;
let cenaMidi = kgMidi * 7.50;

let totalSum = PalamudCena + cenaSafrid + cenaMidi;
console.log(totalSum.toFixed(2));


}

fishland(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"]
    )