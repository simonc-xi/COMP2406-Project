let movies = require ("./movie-data-short.jason");
let users = require("./users.json");

function makeSubscribe(user, people){
   
    //If the users are already Subscribe, stop
    //if(users[userA].following.includes(userB)){
    if(user.following.includes(people.Writer||people.Actor||people.){  
      return;
    }
  
    //Update both so they are now followed
    //users[userA].following.push(userB);
    //users[userB].following.push(userA);
    user.following.push(userB.username);


  }
//check
//print the user after following
let userC = makeSubscribe(users.user0, moives.people);
console.log(users.user0);
console.log(users.user1);