function vacationBooksList(input) {
    numberOfPages = Number(input[0])
    pages = Number(input[1])
    days = Number(input[2])

    let totalTime = numberOfPages / pages
    let hoursNeeded = totalTime / days
    console.log(hoursNeeded);

}

vacationBooksList(["432 ",
"15 ",
"4 "])

