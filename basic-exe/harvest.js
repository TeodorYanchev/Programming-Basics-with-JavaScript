function calculateWineProduction(input) {
    let vineyardArea = Number(input[0]); // Прочитаме площта на лозето
    let grapeYieldPerSqM = Number(input[1]); // Прочитаме гроздето за един кв.м
    let desiredWineLiters = Number(input[2]); // Прочитаме нужните литри вино
    let numWorkers = Number(input[3]); // Прочитаме броя на работниците
  
    let totalGrapes = vineyardArea * grapeYieldPerSqM; // Общо количество грозде
    let wineProduced = (totalGrapes * 0.4) / 2.5; // Произведено вино в литри
  
    if (wineProduced < desiredWineLiters) {
      let wineNeeded = Math.floor(desiredWineLiters - wineProduced);
      return `It will be a tough winter! More ${wineNeeded} liters wine needed.`;
    } else {
      let remainingWine = Math.floor(wineProduced - desiredWineLiters);
      let winePerWorker = Math.ceil(remainingWine / numWorkers);
      return `Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.\n${remainingWine} liters left -> ${winePerWorker} liters per person.`;
    }
  }


harvest(["650",
    "2",
    "175",
    "3"])
