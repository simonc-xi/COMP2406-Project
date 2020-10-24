/*
The pourpose for the file is to let user viewing the actors, or writers and many other people's 
information, and the function include is to subscribe this person if our user like it, and 
the users can save it for later viewing.
*/

// load the movie and user.json
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
let userC = makeSubscribe(users.user0, "John Lasseter"); //should display the user info with following John Lasseter 
console.log(users.user0);
