app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl($location, $routeParams) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
    this.$location = $location
    this.$routeParams = $routeParams
    this.movieID = this.$routeParams.movieId.substring(1)
    this.movieService = new MovieService();
    this.movie = this.movieService.getMovie(this.movieID);

 }


MovieDetailsCtrl.prototype.backButtonClick = function(){
    this.$location.path('/home');
}



