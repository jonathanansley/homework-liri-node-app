// Load the inquirer pacakge
var inquirer = require("inquirer");

// Grab the data from keys.js and the keys in a variable.
var keys = require("./keys.js");

var Twitter = require('twitter');

function myTweets() {
	console.log("--------------------------");
	console.log("--- This is the my-tweets function. ---");
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

}; //end of myTweets function



// This will print everything in exports.
// console.log("--------------------------");
// console.log("--- twitterKeys ---");
// console.log(twitterKeys);

// console.log("You can choose: node liri.js my-tweets, spotify-this-song, movie-this, or do-what-it-says");

// User provides two arguments.

// The first argument will be the action (i.e. node liri.js my-tweets,
// spotify-this-song, movie-this, or do-what-it-says".)
// var action = process.argv[2];

// The second will be the actual value to use.
// var value = process.argv[3];

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
// switch (action) {
//   case "my-tweets":
//     myTweets();
//     break;

//   case "spotify-this-song":
//     spotifyThisSong();
//     break;

//   case "movie-this":
//     movieThis();
//     break;

//   case "do-what-it-says":
//     doWhatItSays();
//     break;
// }



// liri.js can take in: `spotify-this-song`
// `node liri.js spotify-this-song '<song name here>'`
// function spotifyThisSong() {
// 	console.log("--------------------------");
// 	console.log("--- This is the spotify-this-song function. ---");
// 	console.log("--------------------------");

// * Spotify
   // https://www.npmjs.com/package/node-spotify-api

//    * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program
// will default to "The Sign" by Ace of Base.
   
//    * You will utilize the [node-spotify-api]
// (https://www.npmjs.com/package/node-spotify-api)
// package in order to retrieve song information from the Spotify API.
   



//    * Like the Twitter API, the Spotify API requires
// you sign up as a developer to generate the necessary credentials.
// You can follow these steps in order to generate a **client id** and **client secret**:

//    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
//    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

//    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

//    * Step Four: On the next screen,
		// scroll down to where you see your client id and client secret.
		// Copy these values down somewhere,
		// you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api). See the 


// };


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




// +++++++++++++++++++++++++++++
// // INSTRUCTIONS:
// // ---------------------------------------------------------------------------------------------------------
// // Level 1:
// // Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// // Level 2 (More Challenging):
// // Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// // ---------------------------------------------------------------------------------------------------------

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





// ### BONUS

// * In addition to logging the data to your terminal/bash window,
// output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.


// // Core node package for reading and writing files
// var fs = require("fs");

// // This block of code will create a file called "movies.txt".
// // It will then print "Inception, Die Hard" in the file
// fs.writeFile("movies.txt", "Inception, Die Hard, other movie", function(err) {

//   // If the code experiences any errors it will log the error to the console.
//   if (err) {
//     return console.log(err);
//   }

//   // Otherwise, it will print: "movies.txt was updated!"
//   console.log("movies.txt was updated!");

// });





// We then append the contents "Hello Kitty" into the file
// If the file didn't exist then it gets created on the fly.
// fs.appendFile(textFile, "Hello Kitty", function(err) {

//   // If an error was experienced we say it.
//   if (err) {
//     console.log(err);
//   }

//   // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//   else {
//     console.log("Content Added!");
//   }

// });