 let users = require("./users.json");
 let movies = require("./movie-data-short.json");

 //input userA is the follower, and userB is the one been followed
 function makeFollow(userA, userB){
   
    //If one of the user IDs doesn't exist, stop
    /*
    if(!users.hasOwnProperty(userA) && !users.hasOwnProperty(userB)){
      return;
    }*/
  
    //If the users are already friends, stop
    //if(users[userA].following.includes(userB)){
    if(userA.following.includes(userB.username)){  
      return;
    }
  
    //Update both so they are now followed
    //users[userA].following.push(userB);
    //users[userB].following.push(userA);
    userA.following.push(userB.username);


  }
//check
//print the user after following
let userC = makeFollow(users.user0, users.user1);
console.log(users.user0);
console.log(users.user1);

