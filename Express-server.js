const express = require('express');
const app = express();

const model = require("./logic.js");


/*
Function our business logic currently supports:
1. creating a new user (createUser) - POST/users
2. Reading a user (getUser) - GET /users/:users
3. Searching for users (searchUsers) -GET /users
4. Searching for movie (searchMovie) -GET /movies
5. Searching for people (searchPeople) -GET /movies
6. Making a subscribe (makeSubscribe) -Post /users
7. Recommend Movie (getRecMovie) -GET /movies
8. Making a follow (makeFollow) -Post /users
9. Upgrade the Account level (upgradeAccount) - Post /users
10. Posting a new Review for movie (createReview) -Post /users
*/

const requestingUser = model.users["Sop"];
console.log(requestingUser);

app.use(express.json());

//Post request for the creating a new user (createUser), input password/username, return the 
//user information
app.post("/users", function(req, res, next){
//the request body contains the new user information
console.log(req.body);
let result = model.createUser(req.body);
if(!result==null){
  res.status(200).send("User added: " + JSON.stringify(result));
}else{
  res.status(500).send("Failed to add user.");
}
})


//get request for the Reading a user (getUser), input the uid to get the user information
app.get("/users/:uid", function(req, res, next){
  console.log("Getting user with name: " + req.params.uid);
  let result = model.getUser(requestingUser, req.params.uid);
  if(result == null){
    res.status(404).send("Unknown user")
  }else{
    res.status(200).json(result);
  }
})


//Searching for users (searchUsers), 
app.get("/users", function(req, res, next){
  console.log (req.query.name);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result =model.searchUsers(requestingUser, req.query.name);
  res.status(200).json(result);
})


//Searching for moive (searchMovie),
app.get("/movies", function(req, res, next){
  console.log (req.query.title);
  if(req.query.title==undefined){
    req.query.title="";
  }
  let result =model.searchMoive(requestingUser, req.query.name);
  res.status(200).json(result);
})


//Searching for People (searchPeople),
app.get("/movies", function(req, res, next){
  console.log (req.query.title);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result =model.searchPeople(requestingUser, req.query.name);
  res.status(200).json(result);
})



app.listen(3000);
console.log("Server listening at http://localhost:3000");
