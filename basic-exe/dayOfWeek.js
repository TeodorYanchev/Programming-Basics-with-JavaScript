function dayOfWeek(day) {
    let dayOfWeekAsString = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    let result = dayOfWeekAsString[day - 1];
    
    if (result) {
        console.log(result);
    } else {
        console.log("Invalid day!");
    }
    
}