let movies = require ("./movie-data-short.json");
let users = require("./users.json");

//input user who want to subscribe, and the people who has been subscribed by other
function makeSubscribe(user, people){
   
    //If the users are already Subscribe, stop
    if(user.following.includes(people)){  
      return;
    }
  
    //Update they are now followed
    user.following.push(people);


  }
//check
//print the user after following
let userC = makeSubscribe(users.user0, "John Lasseter");
console.log(users.user0);
