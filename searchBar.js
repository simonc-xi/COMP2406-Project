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
    /*
    if(!isValidUser(requestingUser)){
      return results;
    }*/
  
    for(Title in movies){
      let movie = movies[Title];
        if(movie.keywords.includes(movieName)){
          results.push(movie);
       
      }
    }
  
    return results;
  }

  //search people (writer, actor, director)
  function searchPeople(peopleName){
    let results = [];

    /*
    if(!isValidUser(requestingUser)){
      return results;
    }*/

    for(Writer in movies){
      let movieWriter = movies[Writer];
        if(movieWriter.keywords.includes(peopleName)){
          results.push(movieWriter);
        }
      }
    
    for(Actors in movies){
      let movieActors = movies[Actors];
        if(movieActors.keywords.includes(peopleName)){
          results.push(movieActors);
        }
      }

    for(Director in movies){
      let movieDirector = movies[Director];
        if(movieDirector.keywords.includes(peopleName)){
          results.push(movieDirector);
        }
      }

    return results;
  }

//check
console.log("Testing searchUsers");
let result = searchUsers(users.user0, "Sophia")
console.log(result);
//assert(result.length === 2);