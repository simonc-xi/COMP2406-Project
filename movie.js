let movies = require ("./movie-data-short.jason");
let users = require("./users.json");

  
  function createReview(requestingUser, movieTitle, newR){
    //We should verify the contents of the question and we should verify the user
    //We will skip validating the question for now (it's almost dinner time).
    if(!isValidUser(requestingUser)){
      return null;
    }
    newR.creator = requestingUser.username;
    Reviews[newR.id] = newQ;
    users[requestingUser.username].review.push(newR.id);
    return newR;
}
