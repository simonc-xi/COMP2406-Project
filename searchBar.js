let users = require("./users.json");
let movies = require("./movie-data-short.json");


function isValidUser(userObj){
  if(!userObj){
    return false;
  }
  if(!userObj.username || !users.hasOwnProperty(userObj.username)){
    return false;
  }
  return true;
}

//search the user
function searchUsers(requestingUser, searchTerm){
    let results = [];
  
    //If the user is not valid, return an empty array.
    //You could return null to indicate an error or any other value to signify the requesting user was not valid.
    if(!isValidUser(requestingUser)){
      return results;
    }
  
    //If users was an array, you could use a nice one line filter function call
    for(username in users){
      let user = users[username];
      //If this user matches the search term
      if(user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
        //If the requesting user is allowed to access the matching user
        if(user.username === requestingUser.username || requestingUser.following.includes(user.username)){
          results.push(user);
        }
      }
    }
  
    return results;
  }

  //search Movie Title
  function searchMovie(movieName){
    let results = [];
  
    //If the user is not valid, return an empty array.
    //You could return null to indicate an error or any other value to signify the requesting user was not valid.
    
  
    for(name in movies){
      let movie = movies[name];
        if(movie.Title.includes(movieName)){
          results.push(movie);
      }
    }
  
    return results;
  }

  //search people (writer, actor, director)
  function searchPeople(peopleName){
    let results = [];

    for(writer in movies){
      let movieWriter = movies[writer];
        if(movieWriter.Writer.includes(peopleName)){
          results.push(movieWriter);
        }
      }
    
    for(actors in movies){
      let movieActors = movies[actors];
        if(movieActors.Actors.includes(peopleName)){
          results.push(movieActors);
        }
      }

    for(director in movies){
      let movieDirector = movies[director];
        if(movieDirector.Director.includes(peopleName)){
          results.push(movieDirector);
        }
      }

    return results;
  }

//check
//searching the movie by name
console.log("Testing searchMoive");
let result = searchMovie("Toy Story")
console.log(result);

//Testing the people by name
console.log("Testing searchPoeple");
let results = searchPeople("John Lasseter")
console.log(results);