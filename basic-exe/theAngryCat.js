function calculateDamage(priceRatings, entryPoint, itemType) {
    let leftDamage = 0;
    let rightDamage = 0;
  
    for (let i = entryPoint - 1; i >= 0; i--) {
      if (itemType === "cheap" && priceRatings[i] < priceRatings[entryPoint]) {
        leftDamage += priceRatings[i];
      } else if (itemType === "expensive" && priceRatings[i] >= priceRatings[entryPoint]) {
        leftDamage += priceRatings[i];
      } else {
        break;
      }
    }
  
    for (let i = entryPoint + 1; i < priceRatings.length; i++) {
      if (itemType === "cheap" && priceRatings[i] < priceRatings[entryPoint]) {
        rightDamage += priceRatings[i];
      } else if (itemType === "expensive" && priceRatings[i] >= priceRatings[entryPoint]) {
        rightDamage += priceRatings[i];
      } else {
        break;
      }
    }
  
    if (leftDamage >= rightDamage) {
      console.log(`Left - ${leftDamage}`);
    } else {
      console.log(`Right - ${rightDamage}`);
    }
  }
           
 // calculateDamage([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive") 
calculateDamage([5, 10, 12, 5, 4, 20], 3, "cheap")
// calculateDamage([1, 5, 1], 1, "cheap")