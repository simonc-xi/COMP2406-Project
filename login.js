let users = require("./users.json");


//check the user is already exists or not.
function isValidUser(userObj){
    if(!userObj){
      return false;
    }
    if(!userObj.username || !users.hasOwnProperty(userObj.username)){
      return false;
    }
    return true;
}

function createUser(newUser){
//Check the object is valid
//This just ensures the object has a username and password
//You may have more complex logic for your project
if(!newUser.username || !newUser.password){
    return null;
}

if(users.hasOwnProperty(newUser.username)){
    //There is a user with that name already
    return null;
}

//Set initial values for the new user
newUser.accountLevel = [];
newUser.reviews = [];
newUser.following = [];
users[newUser.username] = newUser;

return users[newUser.username];
}

function getUser(requestingUser, userID){
    //If the requesting user is invalid (e.g., is not logged in, is missing username, anything else expected is invalid), disallow
    if(!isValidUser(requestingUser)){
      return null;
    }
  
    //If the requested userID exists and the requesting user is allowed to access it, return the user
    if(users.hasOwnProperty(userID)){
      //It may be beneficial to create a helper function for canAccessUser(requesterID, requestedID)
      //You could use this function in searchUsers below too
      if(requestingUser.username == userID){
        return users[userID];
      }
    }
  
    return null;
}