let users = require("./users.json");
let movies = require("./movie-data-short.json");


//Check the object is valid
//This just ensures the object has a username and password
//You may have more complex logic for your project
function createUser(newUser){
        if(!newUser.username || !newUser.password){
            return null;
        }

        for (i in users){
            if(users[i].username.hasOwnProperty(newUser.username)){
                //There is a user with that name already
                return null;
            }
        }

        //Set initial values for the new user
        newUser.accountLevel = ["regular"];
        newUser.reviews = [];
        newUser.following = [];
        users[newUser.username] = newUser;

        return users[newUser.username];
}


//check
console.log("Creating some users");
//check the createUser function

let userA = createUser({username: "Sop", password: "12345"});
let userB = createUser({username: "rend", password:"12345"});
let userC = createUser({username: "Li", password:"12345"});
let userD = createUser({username: "Lulu", password: "12345"});



//display the newly create user
console.log("Newly created users:");
console.log(userA);
console.log(userB);
console.log(userC);
console.log(userD);



//check the user is already valid form or not.
function isValidUser(userObj){
  if(!userObj){
    return false;
  }
  if(!userObj.username || !users.hasOwnProperty(userObj.username)){
    return false;
  }
  return true;
}

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



//check the users valid or not
console.log("chechk user using the correct form");
let userA = isValidUser({username:"Sophi",password:"12345",accountLevel:["contributing"],reviews:[{"Title":"Toy Story", "Review":"Bad moive, but I like it"}], following:[]});
let userB = isValidUser({username: "rend",});//false
let userC = isValidUser({password:"12345"});//false
let userD = isValidUser({username: "Lulu", password: "12345"}); //false

console.log("check the user state:");
console.log(userA);
console.log(userB);
console.log(userC);
console.log(userD);



/*
Purpose : Recommand some movies to the user homepage with in the section of recommand Movies
Throug the input parameter of the user, we can get its liked movie. from the user liked movie,
we can get general types of movie that users will liked , then we can generated an objects of
movieArr that contains some similar types movies to the users. if the users does not have any
like movie, we will juest randomlize choose some movies to the users.


input:    1. The movie database that stores all the movies
          2. The specific user ,where we can get its liked movie.
          3. The current number

outputs:
          a movies arrary object that contains some movies informaion
*/
function getRecMovie(mov,user){

  let movieArr = [];
  let likeGenre = [];
  let userLiked = [];

  // get user subscribe movie name
  for (i in user["following"]){
    console.log(user["following"][0]);
    userLiked.push(user["following"][i]);
  }

  // get the user liked movie general
  for(i in mov){
    for(j in userLiked){
      if(mov[i]["Title"] == userLiked[j]){
        console.log(mov[i]["Genre"].split(','));
        likeGenre.push(mov[i]["Genre"].split(',')[0]); // push the first
        break;
      }
    }
  }

// add the movie that is user likede general in to movie array
for(i in mov){
  console.log(" User:  " + likeGenre[0]);
  let movieGenera = mov[i]["Genre"].split(',');
  console.log(" Movie  :  " + movieGenera[0]);
  if(movieGenera[0] == likeGenre[0]){
    movieArr.push(mov[i]);
  }


}
  console.log("User liked movie : " + userLiked);
  console.log("User liked Genre : " + likeGenre);
  console.log(movieArr);
  return movieArr;
}
console.log(users)
// generate recommend movie for first user for testing
console.log(users["user0"]);
getRecMovie(movies,users["user0"]);

module.exports = {
  users,
  movies,
  createUser,
  isValidUser,
  getRecMovie
  createUser,
  getUser,
  searchUsers,
}