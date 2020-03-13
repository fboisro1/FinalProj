
var express = require('express');
var router = express.Router();

let serverMovieArray = []; // our "permanent storage" on the web server

// define a constructor to create movie objects
var MovieObject = function (pTitle, pYear, pGenre, pMan, pWoman) {
  this.Title = pTitle;
  this.Year = pYear;
  this.Genre = pGenre;  // action  comedy  drama  horrow scifi  musical  western
  this.Man = pMan;
  this.Woman = pWoman;
}

// for testing purposes, its nice to preload some data
serverMovieArray.push(new MovieObject("Moonstruck", 1987, "Drama", "Nicholas Cage", "Cher"));
serverMovieArray.push(new MovieObject("Caddy_Shack", 1980, "Comedy", "Chevy Chase", "Sarah Holcomb"));
serverMovieArray.push(new MovieObject("Wild_At_Heart", 1990, "Drama", "Nicholas Cage", "Laura VanDern"));
serverMovieArray.push(new MovieObject("Raising_Arizona", 1987, "Comedy", "Nicholas Cage", "Holly Hunter"));
serverMovieArray.push(new MovieObject("La_La_Land", 2016, "Musical", "Ryan Gosling", "Emma Stone"));


/* POST to addMovie */
router.post('/addMovie', function(req, res) {
  console.log(req.body);
  serverMovieArray.push(req.body);
  console.log(serverMovieArray);
  //res.sendStatus(200);
  res.status(200).send(JSON.stringify('success'));
});


/* GET movieList. */
router.get('/movieList', function(req, res) {
  res.json(serverMovieArray);
 });

 /* DELETE to deleteMovie. */
 router.delete('/deleteMovie/:Title', function(req, res) {
  let Title = req.params.Title;
  Title = Title.toLowerCase();  // allow user to be careless about capitalization
  console.log('deleting ID: ' + Title);
   for(let i=0; i < serverMovieArray.length; i++) {
     if(Title == (serverMovieArray[i].Title).toLowerCase()) {
     serverMovieArray.splice(i,1);
     }
   }
   res.status(200).send(JSON.stringify('deleted successfully'));
});


//  router.???('/userlist', function(req, res) {
//  users.update({name: 'foo'}, {name: 'bar'})



module.exports = router;

