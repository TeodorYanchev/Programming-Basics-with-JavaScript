function meetings(data) {
    let result = {};
    let scheduledMeetings = {};

    for (let entry of data) {
        let [day, name] = entry.split(" ");
        
        if (scheduledMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            if (!result.hasOwnProperty(day)) {
                result[day] = [];
            }
            result[day].push(name);
            scheduledMeetings[day] = true;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in result) {
        console.log(`${day} -> ${result[day].join(", ")}`);
    }
}