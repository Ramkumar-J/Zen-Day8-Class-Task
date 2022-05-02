var moviearray = [
    {
        title: "spiderman",
        rating: "PG"
    },
    {
        title: "batman",
        rating: "PG13"
    },
    {
        title: "superman",
        rating: "PG"
    },
];
var Movie = /** @class */ (function () {
    function Movie(config) {
        this.title = config.title;
        this.studio = config.studio;
        this.rating = config.rating;
        if (this.rating == "") {
            this.rating = "PG";
        }
    }
    Movie.prototype.getPG = function (movies) {
        moviearray.filter(function (moviearr) {
            console.log(moviearr);
        });
    };
    return Movie;
}());
var Movie1 = new Movie({
    title: "Casino Royale",
    studio: "Eon Productions",
    rating: "PG13"
});
console.log(Movie1);
var Movie2 = new Movie({
    title: "Casino",
    studio: "Disney Productions",
    rating: ""
});
console.log(Movie2);
