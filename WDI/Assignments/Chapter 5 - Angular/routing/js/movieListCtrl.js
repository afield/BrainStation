app.controller('MovieListCtrl', MovieListCtrl);

function MovieListCtrl($location) {
  /*TODO #3: Load all of the movies from the movieService*/
this.movieService = new MovieService();
this.movies = this.movieService.movies;
this.$location = $location;
//this.movieId = this.movieService.getmovie();
//    console.log(movieId);
  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  this.selectedOption = this.sortOptions[0];
    
    console.log(this.selectedOption);
  this.curPage = 0;
  this.moviesPerPage = 4;
    this.numberOfPages = function(){
         return Math.ceil(this.movies.length / this.moviesPerPage);
   
    }
}

MovieListCtrl.prototype.clickMovie = function(movie){
//    this.$location.path('/movie/:movieId')
    this.movie = movie;
    this.movieID = this.movie.imdbID;
    this.$location.path('/movie/:'+this.movieID)

}

app.filter('pagination', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    };
});





