var movieDB = [
    {
        title: "Spirited Away",
        watched: false,
        rating: 5
    },
    {
        title: "Gone with the Wind",
        watched: true,
        rating: 4
    },
    {
        title: "The Minions",
        watched: true,
        rating: 3
    },
    {
        title: "Once Upon a Time in Hollywood",
        watched: false,
        rating: 5
    }
]

function buildString(movie) {
    var result = "You have ";
    if (movie.watched) {
        result += "watched ";
    }
    else {
        result += "not watched ";
    }
    result += "\"" + movie.title + "\" - " + movie.rating + " stars"; 
    console.log(result);
}

movieDB.forEach(function(movie) {
    console.log(buildString(movie));
});