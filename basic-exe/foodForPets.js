function petFood(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let biscuits = 0;
    let dogFoodEaten = 0;
    let catFoodEaten = 0;

    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[i * 2]);
        let catFood = Number(input[i * 2 + 1]);

        dogFoodEaten += dogFood;
        catFoodEaten += catFood;

        totalFood -= dogFood + catFood;

        if (i % 3 === 0) {
            biscuits += (dogFood + catFood) * 0.10;
        }
    }

    let percentEaten = ((dogFoodEaten + catFoodEaten) / (totalFood + dogFoodEaten + catFoodEaten)) * 100;
    let percentDogFood = (dogFoodEaten / (dogFoodEaten + catFoodEaten)) * 100;
    let percentCatFood = (catFoodEaten / (dogFoodEaten + catFoodEaten)) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]) 