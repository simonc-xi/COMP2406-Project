//let users = require("./users.json");

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



let signUpBut = document.getElementById("signup");
signUpBut.onclick = signup;
let loginBut = document.getElementById("login");
loginBut.onclick = login;


function signup(){
  window.location.href = "http://localhost:3000/signup";
}

function login(){
  
  window.location.href = "http://localhost:3000/login";
}

console.log("chechk user using the correct form");
let userA = isValidUser({username:"Sophi",password:"12345",accountLevel:["contributing"],reviews:[{"Title":"Toy Story", "Review":"Bad moive, but I like it"}], following:[]});
let userB = isValidUser({username: "rend",});
let userC = isValidUser({password:"12345"});
let userD = isValidUser({username: "Lulu", password: "12345"});

console.log("check the user state:");
console.log(userA);
console.log(userB);
console.log(userC);
console.log(userD);