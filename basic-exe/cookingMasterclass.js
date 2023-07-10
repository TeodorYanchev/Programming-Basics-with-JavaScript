function cookingMasterclass(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceFlour = Number(input[2]);
    let priceEgg = Number(input[3]);
    let priceApron = Number(input[4]);
  
    let apronCount = Math.ceil(students * 1.2);
    let freeFlourCount = Math.floor(students / 5);
    let totalFlourCount = students - freeFlourCount;
    let totalFlourCost = totalFlourCount * priceFlour;
    let totalCost = (totalFlourCost + (students * 10 * priceEgg) + (apronCount * priceApron)).toFixed(2);
  
    if (budget >= totalCost) {
      console.log(`Items purchased for ${totalCost}$.`);
    } else {
      let neededMoney = (totalCost - budget).toFixed(2);
      console.log(`${neededMoney}$ more needed.`);
    }
  }
//   cookingMasterclass(["50", "2", "1.0", "0.10", "10.0"])
// cookingMasterclass(["100", "25", "4.0", "1.0", "6.0"])
 cookingMasterclass([946, 20, 12.05, 0.42, 27.89])