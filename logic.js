/*
Purpose: This file include all the business logic part of the project, which provides the basic web function.
This file include the different logic function, for creating new users, searching movie, or people, recommend
movie, ect.
*/

let users = require("./movie/users.json");
let movies = require("./movie-data-short.json");


//create the user with all the defult value
//input the new users information
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
        newUser.likedMovie = [];
        users[newUser.username] = newUser;

        return users[newUser.username];
}


//check the user is valid form or not.
function isValidUser(userObj){
  if(!userObj){
    return false;
  }
  if(!userObj.username || !users.hasOwnProperty(userObj.username)){
    return false;
  }
  return true;
}

function authenticateUser(username, password){
  return users.hasOwnProperty(username) && users[username].password == password;
}

//get the user infor by given input username,
function getUser(requestingUser, userID){
    //If the requesting user is invalid
    if(!isValidUser(requestingUser)){
      return null;
    }

    //If the requested userID exists and the requesting user is allowed to access it, return the user
    if(users.hasOwnProperty(userID)){
      if(requestingUser.username == userID || requestingUser.friends.includes(userID)){
        return users[userID];
      }
    }

    return null;
}

// Purpose : Return the first string that separate by the , then get the string before (
// ex : Input : "John Lasseter (original story by), Pete Docter (original story by)"
//      Output : ["John Lasseter", "Pete Docter"]
function getNameArr(str){
  let arrStr = str.split(',');
  let nameArr = []
  for(let i=0; i < arrStr.length; i++){
    let name = arrStr[i].split('(')[0];
    //check if the first string whetehr contains space bar
    if(name[0] === ' '){
      name = name.substring(1);
    }
    nameArr.push(name);
  }
  return nameArr;
}
//console.log(getNameArr("John Lasseter (original story by), Pete Docter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Joss Whedon (screenplay by), Andrew Stanton (screenplay by), Joel Cohen (screenplay by), Alec Sokolow (screenplay by)"));
//console.log(getNameArr("Tom Hanks, Tim Allen, Don Rickles, Jim Varney"));


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

    for(i in movies){
      let moviepeople = movies[i];
      if(moviepeople.Actors.includes(peopleName)){
        results.push(moviepeople);
      }else if(moviepeople.Actors.includes(peopleName)){
        results.push(moviepeople);
      }else if(moviepeople.Director.includes(peopleName)){
        results.push(moviepeople);
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
// Purpose : generated random movie on the Homepage if the user haven't login
function getRanMovie(){
  let movArr =[];
  for(let i =0;i< 5;i++){
    movArr[i] = movies[i];
  }
  return movArr;

}

// Pupose : get Specific movie
function getMovie(name){
  let movArr =[];
  for(i in movies){
    if(movies[i].Title == name){
      movArr.push(movies[i]);
    }
  }
  return movArr;

}

// Purpose : return the Director past work invovle
function getPeopleMoivie(){
  return;
}





console.log("Creating some users");
let userA = createUser({username: "Sop", password: "12345"});
let userC = createUser({username: "Li", password:"12345"});
let userD = createUser({username: "Lulu", password: "12345"});
let userB = createUser({username: "simon", password: "123"});





module.exports = {
  users,
  movies,
  isValidUser,
  createUser,
  getUser,
  makeSubscribe,
  searchUsers,
  searchMovie,
  searchPeople,
  authenticateUser,
  getRanMovie,
  getMovie,
  upgradeAccount,
  createReview,
  getNameArr,
}
