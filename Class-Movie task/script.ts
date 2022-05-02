interface movieconfig {
  title: string;
  studio: string;
  rating: string;
}
let moviearray = [
  {
    title: "spiderman",
    rating: "PG",
  },
  {
    title: "batman",
    rating: "PG13",
  },
  {
    title: "superman",
    rating: "PG",
  },
];
class Movie {
  title: string;
  studio: string;
  rating: string;
  constructor(config: movieconfig) {
    this.title = config.title;
    this.studio = config.studio;
    this.rating = config.rating;
    if (this.rating == "") {
      this.rating = "PG";
    }
  }
  getPG(movies: Array<moviearray>) {
    moviearray.filter((moviearr) => {
      console.log(moviearr);
    });
  }
}

let Movie1 = new Movie({
  title: "Casino Royale",
  studio: "Eon Productions",
  rating: "PG13",
});
console.log(Movie1);
let Movie2 = new Movie({
  title: "Casino",
  studio: "Disney Productions",
  rating: "",
});
console.log(Movie2);
