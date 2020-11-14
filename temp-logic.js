let users = require("./users.json");
let movies = require("./movie-data-short.json");


//Check the object is valid
//This just ensures the object has a username and password
//You may have more complex logic for your project
function createUser(newUser){
        if(!newUser.username || !newUser.password){
            return null;
        }

        if(users.hasOwnProperty(newUser.username)){
          //There is a user with that name already
          return null;
        }

        //Set initial values for the new user
        newUser.accountLevel = ["regular"];
        newUser.reviews = [];
        newUser.following = [];
        users[newUser.username] = newUser;

        return users[newUser.username];
}


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

//check user is authenticated or not
function authenticateUser(username, password){
  return users.hasOwnProperty(username) && users[username].password == password;
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
      if(requestingUser.username == userID || requestingUser.friends.includes(userID)){
        return users[userID];
      }
    }

    return null;
}
// Purpose : generated random movie on the Homepage if the user haven't login
function getRanMovie(){
  let movArr =[];
  for(let i =0;i< 5;i++){
    movArr[i] = movies[i];
  }
  return movArr;

}

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
/*
function getRecMovie(mov,user){

  let movieArr = [];
  let likeGenre = [];
  let userLiked = [];

  // check if the user subscribe movie is null or not
  if (user["following"] != NULL){
    // get user subscribe movie name
    for (i in user["following"]){
      console.log(user["following"][0]);
      userLiked.push(user["following"][i]);
    }
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
*/

/*
input: user - who want to subscribe, and the people who has been subscribed by other
output: NULL - not found the user, 2 - user already in the following, 3-add succesful
*/
function makeSubscribe(user, people){
    console.log("!"+user + ".hasOwnProperty("+people+ " = " +  !users.hasOwnProperty(people));
    let flag = 0;
    //If one of the user doesn't exist, stop
    if(!users.hasOwnProperty(user) || !users.hasOwnProperty(people)){
      return flag;
    }
    console.log("user = " + user);
    console.log("users = " + users[user]);
    //If the users are already Subscribe, stop
    if(users[user].following.includes(people)){
      flag = 1;
      return flag;
    }

    //Update they are now followed
    users[user].following.push(people);
    flag = 2;
    return flag;


}

//search the user
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
        if(user.username === requestingUser.username || requestingUser.following.includes(user.username)){
          results.push(user);
        }
      }
    }

  return results;
}


//search Movie Title
function searchMovie(movieName){
  let results = [];

  //If the user is not valid, return an empty array.
  //You could return null to indicate an error or any other value to signify the requesting user was not valid.


  for(name in movies){
    let movie = movies[name];
      if(movie.Title.includes(movieName)){
        results.push(movie);
    }
  }

return results;
}

//search people (writer, actor, director)
function searchPeople(peopleName){
  let results = [];

  for(writer in movies){
    let movieWriter = movies[writer];
      if(movieWriter.Writer.includes(peopleName)){
        results.push(movieWriter);
      }
    }

  for(actors in movies){
    let movieActors = movies[actors];
      if(movieActors.Actors.includes(peopleName)){
        results.push(movieActors);
      }
    }

  for(director in movies){
    let movieDirector = movies[director];
      if(movieDirector.Director.includes(peopleName)){
        results.push(movieDirector);
      }
    }

  return results;
}

//change the account level
function upgradeAccount(requestingUser){

    if(!isValidUser(requestingUser)){
        return null;
    }

    if(requestingUser.accountLevel === "regular"){
        requestingUser.accountLevel = ["contributing"];
        console.log("upgrade!")
    }else{
        requestingUser.accountLevel= ["regular"];
        console.log("downgrade~");
    }
    users[requestingUser.accountLevel] = requestingUser;
    return users[requestingUser.accountLevel];
}


function createReview(requestingUser, title, newR){
  //Verify the contents of the question and we should verify the user

  /*
  if(!isValidUser(requestingUser)){
    return null;
  }*/
  let reviewArr = [];

  reviewArr.push(title);
  reviewArr.push(newR);

  requestingUser.reviews.push(reviewArr);

  return newR;
}

/*
console.log("Creating some users");
let userA = createUser({username: "Sop", password: "12345"});
let userC = createUser({username: "Li", password:"12345"});
let userD = createUser({username: "Lulu", password: "12345"});
let userB = createUser({username: "simon", password: "123"});

console.log("SUBSCRIBE TEST--");

makeSubscribe("Sop","Li")
makeSubscribe("Li", "John Lasseter");
makeSubscribe("Sop", "Frank");
makeSubscribe("Sop", "Franksadassd");
upgradeAccount(userA);
//display the newly create user
console.log("Newly created users:");
console.log(userA);
console.log(userC);
console.log(userD);

//display all the users
console.log("USERS: ");
console.log(users);
console.log("Sop Following: ");
console.log(users["Sop"].following);
console.log("Frank Following: ");
console.log(users["Frank"].following);
console.log(!users.hasOwnProperty("dsadsadsa"));
//print the user after following


//searching the movie by name
console.log("Testing searchMoive");
let result = searchMovie("Toy Story") //should print the movie info with the title Toy Story
console.log(result);

//Testing the people by name
console.log("Testing searchPoeple");
let results = searchPeople("John Lasseter") //should print this people's movie info and other related
console.log(results);
*/

let arr = getRanMovie();
console.log(arr);


module.exports = {
  users,
  movies,
  isValidUser,
  //getRecMovie,
  createUser,
  getUser,
  searchUsers,
  makeSubscribe,
  upgradeAccount,
  createReview,
  searchPeople,
  searchMovie,
  searchUsers,
  getRanMovie,
}
