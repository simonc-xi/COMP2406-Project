//let users = require("./users.json");




//function for the sign up and loge in
let signUpBut = document.getElementById("signup");
signUpBut.onclick = signup;
let loginBut = document.getElementById("login");
loginBut.onclick = login;


function signup(){
  window.location.href = "http://localhost:3000/signup";
}



/*
Purpose : send user input username and password information to the server,\
          client-side javascript
input : null
output : null

*/
/*
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

}
*/
