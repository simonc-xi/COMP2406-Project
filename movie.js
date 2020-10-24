let movies = require ("./movie-data-short.json");
let users = require("./users.json");


function createQReview(requestingUser, newR, title){
  //We should verify the contents of the question and we should verify the user
  //We will skip validating the question for now (it's almost dinner time).
  for (i in users){
    for (j in users[i].reviews){

    }
  }
}



console.log("add a new review");
createQReview(users.user0, "aaaaaa", "aaaaa");
console.log(users.user0);
