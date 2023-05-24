function yardGreening(input) {
   
    //Цената на един кв. м. е 7.61 лв със ДДС. 
    //Понеже нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.
    let squareMeters = Number(input[0])

//  "The final price is: {крайна цена на услугата} lv."
//"The discount is: {отстъпка} lv."
let priceForLandscaping = squareMeters * 7.61
let discount = 0.18 * priceForLandscaping
let finalPriceAfterDiscount = priceForLandscaping - discount

    console.log(`The final price is: ${finalPriceAfterDiscount} lv.`)
    console.log(`The discount is: ${discount} lv.`)


}

yardGreening(["150"])
