function smallestTwoNumbers(data) {
    return data.sort((a, b) => a - b).splice(0, 2).join(" ");

}