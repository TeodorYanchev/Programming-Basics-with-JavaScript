function movies(input) {
    let movies = [];

    input.forEach(line => {
        if (line.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1];
            movies.push({ name: movieName });
        } else if (line.includes('directedBy')) {
            let [movieName, director] = line.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [movieName, date] = line.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    });

    movies = movies.filter(movie => movie.name && movie.director && movie.date);

    movies.forEach(movie => {
        console.log(JSON.stringify(movie));
    });
}