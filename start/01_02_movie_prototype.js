class Movie {
  constructor (title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview(){
    const overviewMsg = `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    return overviewMsg;
  }
}

const newMovie = new Movie("Titanic","directorTitanic","Romance",2000,10);
console.log(newMovie.getOverview());

