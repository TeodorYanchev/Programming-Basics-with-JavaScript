function meetings(data) {
    let meetingsMap = new Map();

    for (let entry of data) {
        let [day, name] = entry.split(" ");

        if (meetingsMap.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsMap.set(day, name);
            console.log(`Scheduled for ${day}`);
        }
    }


    let successfulMeetings = Array.from(meetingsMap, ([day, name]) => ({ day, name }));

    successfulMeetings.forEach(meeting => {
        console.log(`${meeting.day} -> ${meeting.name}`);
    });
}