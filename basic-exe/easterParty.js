function calculateFoodStats(input) {
    const pricePerKg = 12.45;
    let totalFood = 0;
    let groups = [0, 0, 0]; 

    for (const foodAmountStr of input.slice(1)) {
        const foodAmount = Number(foodAmountStr);
        if (foodAmount >= 100 && foodAmount <= 200) {
            groups[0]++; 
        } else if (foodAmount > 200 && foodAmount <= 300) { 
            groups[1]++; 
        } else {
            groups[2]++; 
        }
        totalFood += foodAmount;
    }

    const totalPrice = (totalFood / 1000) * pricePerKg;

    console.log(`Group 1: ${groups[0]} cats.`);
    console.log(`Group 2: ${groups[1]} cats.`);
    console.log(`Group 3: ${groups[2]} cats.`);
    console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`);
}

calculateFoodStats(["6", 
"102", 
"236", 
"123", 
"399", 
"342",  
"222"]) 