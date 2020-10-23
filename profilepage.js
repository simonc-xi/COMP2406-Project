let users = require("./users.json");
let movies = require("./movie-data-short.jason");

function createReview(requestingUser, newR){
    //We should verify the contents of the question and we should verify the user
    //We will skip validating the question for now (it's almost dinner time).
    if(!isValidUser(requestingUser)){
      return null;
    }

    newR.id = String(nextQuestionID);
    newQ.creator = requestingUser.username;
    nextReviewID++;
    Reviews[newR.id] = newQ;
    users[requestingUser.username].review.push(newR.id);
    return newR;
}


//choose to make the account level
function upgradeAccount(requestingUser){
   
    if(!isValidUser(requestingUser)){
        return null;
    }


}