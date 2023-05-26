function suppliesForSchool(input) {
    chemicalPack = Number(input[0])
    markerPack = Number(input[1])
    cleanerLiters = Number(input[2])
    percentDiscount = Number(input[3])


    let chemicalsPrice = chemicalPack * 5.80
    let markersPrice = markerPack * 7.20
    let cleanerLitersPrice = cleanerLiters * 1.20
    let totalSum = chemicalsPrice + markersPrice + cleanerLitersPrice

    let PriceWithDiscount = totalSum - (totalSum * (percentDiscount / 100 ))
    console.log(PriceWithDiscount);

}

suppliesForSchool(["2 ",
    "3 ",
    "4 ",
    "25 "]
)