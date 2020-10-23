let users = require("./users.json");
let movies = require("./movie-data-short.json");

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

  function searchMovie(movieName, searchTerm){
    let results = [];
  
    //If the user is not valid, return an empty array.
    //You could return null to indicate an error or any other value to signify the requesting user was not valid.
    /*
    if(!isValidUser(requestingUser)){
      return results;
    }*/
  
    //If users was an array, you could use a nice one line filter function call
    for(Title in movies){
      let user = users[username];
      //If this user matches the search term
      if(user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
        //If the requesting user is allowed to access the matching user
        if(user.username === requestingUser.username || requestingUser.friends.includes(user.username)){
          results.push(user);
        }
      }
    }
  
    return results;
  }

  function searchPeople(peopleName, searchTerm){
    let results = [];
  
    //If the user is not valid, return an empty array.
    //You could return null to indicate an error or any other value to signify the requesting user was not valid.
    /*
    if(!isValidUser(requestingUser)){
      return results;
    }*/
  
    //If users was an array, you could use a nice one line filter function call
    for(username in users){
      let user = users[username];
      //If this user matches the search term
      if(user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
        //If the requesting user is allowed to access the matching user
        if(user.username === requestingUser.username || requestingUser.friends.includes(user.username)){
          results.push(user);
        }
      }
    }
  
    return results;
  }