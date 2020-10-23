let movies = require ("./movie-data-short.jason");
let users = require("./users.json");

function searchUsers(requestingUser, searchTerm){
    let results = [];
  
    //If the user is not valid, return an empty array.
    //You could return null to indicate an error or any other value to signify the requesting user was not valid.
    if(!isValidUser(requestingUser)){
      return results;
    }
  
    //If users was an array, you could use a nice one line filter function call
    for(username in users){
      let user = users[username];
      //If this user matches the search term
      if(user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
        //If the requesting user is allowed to access the matching user
        if(user.username === requestingUser.username || requestingUser.friends.includes(user.username)){
          results.push(user);
        }
      }
    }
  
    return results;
  }

  
function createQuestion(requestingUser, newQ){
//We should verify the contents of the question and we should verify the user
//We will skip validating the question for now (it's almost dinner time).
    if(!isValidUser(requestingUser)){
        return null;
    }

    newQ.id = String(nextQuestionID);
    newQ.creator = requestingUser.username;
    nextQuestionID++;
    questions[newQ.id] = newQ;
    users[requestingUser.username].questions_created.push(newQ.id);
    return newQ;
}

function generateRecommendMovie(){
  
}