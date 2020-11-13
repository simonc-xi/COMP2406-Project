const express = require('express');
const app = express();

const model = require("./logic.js");


/*
Function our business logic currently supports:
1. creating a new user (createUser) - POST/users
2. Reading a user (getUser) - GET /users/:users
3. Searching for users (searchUsers) -GET /users
4. Searching for movie (searchMovie) -GET /movie-data-short
5. Searching for people (searchPeople) -GET /movie-data-short
6. Making a subscribe (makeSubscribe) -Post /users
7. Recommend Movie (getRecMovie) -GET /movie-data-short
8. Making a follow (makeFollow) -Post /users
9. Upgrade the Account level (upgradeAccount) - Post /users
10. Posting a new Review for movie (createReview) -Post /users
*/

app.use(express.json());

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

app.listen(3000);
console.log("Server listening at http://localhost:3000");
