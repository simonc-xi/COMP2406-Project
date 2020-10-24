//let users = require("./users.json");


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
  //get user name
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username.length == 0 || password.length == 0){
		alert("Enter the correct input");
		return;
	}

  let user = {username,password};
  console.log(user);
  let req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log("userprofile ->  " + this.responseText);
			//console.log("http://localhost:3000/login" + this.responseText);
			window.location.href = "http://localhost:3000/login";
		}
	}

  req.open("POST", "http://localhost:3000/login");
  req.send(JSON.stringify(user));




  //window.location.href = "http://localhost:3000/login";
}
