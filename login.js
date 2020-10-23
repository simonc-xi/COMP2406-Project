let users = require("./users.json");


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