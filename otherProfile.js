 let users = require("./users.json");
 let movies = require("./movie-data-short.json");

 function makeFollow(userA, userB){
    //If one of the user IDs doesn't exist, stop
    if(!users.hasOwnProperty(userA) && !users.hasOwnProperty(userB)){
      return;
    }
  
    //If the users are already friends, stop
    if(users[userA].following.includes(userB)){
      return;
    }
  
    //Update both so they are now friends
    users[userA].following.push(userB);
    users[userB].following.push(userA);
  }

  