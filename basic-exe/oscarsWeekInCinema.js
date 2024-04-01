function oscarsWeekInCinema(input) {

    let movieName = input[0];
    let ticketType = input[1];
    let soldTickets = Number(input[2]);
    let sum = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (ticketType === 'normal') {
                sum = 7.50 * soldTickets;
            } else if (ticketType === 'luxury') {
                sum = 10.50 * soldTickets;
            } else if (ticketType === 'ultra luxury') {
                sum = 13.50 * soldTickets;
            }
            break;
        case "Bohemian Rhapsody":
            if (ticketType === 'normal') {
                sum = 7.35 * soldTickets;
            } else if (ticketType === 'luxury') {
                sum = 9.45 * soldTickets;
            } else if (ticketType === 'ultra luxury') {
                sum = 12.75 * soldTickets;
            }
            break;
        case "Green Book":
            if (ticketType === 'normal') {
                sum = 8.15 * soldTickets;
            } else if (ticketType === 'luxury') {
                sum = 10.25 * soldTickets;
            } else if (ticketType === 'ultra luxury') {
                sum = 13.25 * soldTickets;
            }
            break;
        case "The Favourite":
            if (ticketType === 'normal') {
                sum = 8.75 * soldTickets;
            } else if (ticketType === 'luxury') {
                sum = 11.55 * soldTickets;
            } else if (ticketType === 'ultra luxury') {
                sum = 13.95 * soldTickets;
            }
            break;
    }

    console.log(`${movieName} -> ${sum.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"])