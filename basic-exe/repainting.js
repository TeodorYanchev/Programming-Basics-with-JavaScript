function repainting(input) {
let nylon = Number(input[0])
let paint = Number(input[1])
let thinner = Number(input[2])
let numberOfHours = Number(input[3])

let nylonPrice = (nylon + 2) * 1.50
let paintPrice = (paint + (0.1 * paint)) * 14.50
let thinnerPrice = thinner * 5.00

let materialsSum = nylonPrice + paintPrice + thinnerPrice + 0.40

let amountForLabor = (materialsSum * 0.3) * numberOfHours

let totalSum = materialsSum + amountForLabor

console.log(`${totalSum}`)
}

repainting(["5 ",
"10 ",
"10 ",
"1 "])
