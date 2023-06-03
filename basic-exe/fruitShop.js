function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let price = 0;


   if(dayOfWeek == "Monday") {
    if(fruit == "banana") {
        price = quantity * 2.50;
    } else if(fruit == "apple") {
        price = quantity * 1.20;
    } else if(fruit == "orange") {
        price = quantity * 0.85;
    } else if(fruit == "grapefruit") {
        price = quantity * 1.45;
    } else if(fruit == "kiwi") {
        price = quantity * 2.70;
    } else if(fruit == "pineapple") {
        price = quantity * 5.50;
    } else if(fruit == "grapes") {
        price = quantity * 3.85;
    } console.log(price.toFixed(2));
   } 



    
}

fruitShop(["kiwi",
"Monday",
"2.5"])

