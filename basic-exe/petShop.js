function petShop(input) {

    //Храната се пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв.
    let dogFood = Number(input[0])
    let catFood = Number(input[1])
   
    let finalPrice = (dogFood * 2.50) + (catFood * 4);
    console.log(`${finalPrice} lv.`)
}

petShop(["13",
"9"]


)
