//NPM packages

// Load the inquirer pacakge
var inquirer = require("inquirer");

// Core node package for reading and writing files
var fs = require("fs");

// Grab the data from keys.js and the keys in a variable.
var keys = require("./keys.js");

var Twitter = require('twitter');

var spotify = require('spotify');

var getMyTweets = function() {
	console.log("--------------------------");
	console.log("--- This is the getMytweets function. ---");
	console.log("`node liri.js my-tweets`");
	console.log("last 20 tweets and when created.");
	console.log("--------------------------");

	var client = new Twitter(keys.twitterKeys);

	var params = {screen_name: 'jakc12341'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if(!error) {
				// console.log(tweets);
				for (var i = tweets.length - 1; i >= 0; i--) {
					tweets[i]
					console.log("--------------------------");
					console.log(tweets[i].created_at);
					console.log(' ');
					console.log(tweets[i].text);
					console.log("--------------------------\n\n");
				}
			}
		});

}; // end of getMyTweets function

// liri.js can take in: `spotify-this-song`
// `node liri.js spotify-this-song '<song name here>'`
var spotifyThisSong = function() {
	console.log("\n--------------------------");
	console.log("--- This is the spotify-this-song function. ---\n");
	console.log("--------------------------");

// * Spotify
   // https://www.npmjs.com/package/node-spotify-api
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
}
);

    console.log(data);

}; // end of spotifyThisSong function

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
var pick = function(caseData, functionData) {	
	switch (caseData) {
	  case "my-tweets":
	    getMyTweets();
	    break;

	  case "spotify-this-song":
	    spotifyThisSong();
	    break;

	  // case "movie-this":
	  //   movieThis();
	  //   break;

	  // case "do-what-it-says":
	  //   doWhatItSays();
	  //   break;

	  default:
	  console.log('LIRI does not know that.');
	}
}; // end of pick function

var runThis = function(argOne, argTwo) {
	pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);



// liri.js can take in: `movie-this`
// function movieThis() {
// 	console.log("--------------------------");
// 	console.log("--- This is the movie-this function. ---");
// 	console.log("--------------------------");

// `node liri.js movie-this '<movie name here>'`
     
   //   * You'll use Request to grab data from the OMDB API
   //   http://www.omdbapi.com

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in,
// the program will output data for the movie 'Mr. Nobody.'
// default
   
// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `40e9cece`.
// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// var request = require("request");

// run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

// If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//     console.log(body);
//   }
// });




// +++
// // Level 1:
// // Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// // Level 2 (More Challenging):
// // Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// // ----------------------

// // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// var request = require("request");

// // Store all of the arguments in an array
// var nodeArgs = process.argv;

// // Create an empty variable for holding the movie name
// var movieName = "";

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {

//     movieName = movieName + "+" + nodeArgs[i];

//   }

//   else {

//     movieName += nodeArgs[i];

//   }
// }

// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("Release Year: " + JSON.parse(body).Year);
//   }
// });

// ++++++++++++++++++++++++++++
// };


// liri.js can take in: `do-what-it-says`
// function doWhatItSays() {
// 	console.log("--------------------------");
// 	console.log("--- This is the do-what-it-says function. ---");

// `node liri.js do-what-it-says`
   
//    * Using the `fs` Node package, LIRI will take
// the text inside of random.txt and then use
// it to call one of LIRI's commands.
     
//      * It should run `spotify-this-song`
// for "I Want it That Way," as follows the text in `random.txt`.
     
//      * Feel free to change the text in that document
// to test out the feature for other commands.
// };