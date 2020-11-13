const express = require('express');
const pug = require("pug");
const model = require("./logic.js");
const fs = require("fs");
const app = express();
app.set("view engine", "pug");
const session = require('express-session');

app.use(session({ secret: 'some secret here'}))


const requestingUser = model.users["Sop"];
console.log(requestingUser);

/*
Function our business logic currently supports:
1. creating a new user (createUser) - POST/users
2. Reading a user (getUser) - GET /users/:users
3. Searching for users (searchUsers) -GET /users
4. Searching for movie (searchMovie) -GET /movies
5. Searching for people (searchPeople) -GET /movies
6. Making a subscribe (make Subscribe) -Post /users
7. Recommend Movie (getRecMovie) -GET /movies
8. Making a follow (makeFollow) -Post /users
9. Upgrade the Account level (upgradeAccount) - Post /users
10. Posting a new Review for movie (createReview) -Post /users
*/
//user pug functrion to render through the login Page
const renderLogin = pug.compileFile('pages/login.pug');
const renderHome = pug.compileFile('pages/Home.pug');
const renderSignup = pug.compileFile('pages/Signup.pug');




app.use(express.static('public'));
//app.set('view engine', 'pug')
app.use(express.urlencoded({extended: true}));

const session = require('express-session')
app.use(session({
  cookie:{
    maxAge:500000000000000
  },
  secret: 'secret!!'
}))

//check the cookie been create
app.use('/', function(req, res, next){
  console.log(req.session);
  next()
})

app.use(express.json());

app.get('/signup',signUpPage)
app.get('/login',logInPage)

//app.post('/signUpUser',signUpUser,logInUser)
//app.post('/logInUser',logInUser);

function signUpPage(req, res){
  res.render('pages/Signup.pug')
}

function logInPage(req, res){
  res.render("pages/login.pug",{session:req.session})
}

//1. Post request for the creating a new user (createUser)
//input password/username, return the user information
app.post("/users", function(req, res, next){
//the request body contains the new user information
console.log(req.body);
let result = model.createUser(req.body);
if(result){
  res.status(200).send("User added: " + JSON.stringify(result));
}else{
  res.status(500).send("Not valid user.");
}
})


//2. get request for the Reading a user (getUser), input the uid to get the user information
app.get("/users/:uid", function(req, res, next){
  console.log("Getting user with name: " + req.params.uid);
  //let requestUser = model.users[req.params.uid];
  let result = model.getUser(requestUser, req.params.uid);
  if(result == null){
    res.status(404).send("Unknown user")
  }else{
    res.status(200).json(result);
    return;
  }
})


//3. Searching for users (searchUsers),
app.get("/users", function(req, res, next){
  console.log (req.query.name);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result = model.searchUsers(requestingUser, req.query.name);
  res.status(200).json(result);
})


//4. Searching for moive (searchMovie),
app.get("/movies", function(req, res, next){
  console.log (req.query.title);
  if(req.query.title==undefined){
    req.query.title="";
  }
  let result =model.searchMoive(requestingUser, req.query.name);
  res.status(200).json(result);
})


//5. Searching for People (searchPeople),
app.get("/movies", function(req, res, next){
  console.log (req.query.name);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result =model.searchPeople(requestingUser, req.query.name);
  res.status(200).json(result);
})

//6. Making a subscribe (makeSubscribe) -Post /users
app.post("/SubscibeUsers/:uid", function(req, res, next){
  console.log("req.params.uid = " + req.params.uid);
  let result = model.makeSubscribe(requestingUser.username, req.params.uid);
  console.log("result = "+ result);
  if(result == 0){
    res.status(500).send("The user does not exist");
  }else if (result == 1){
    res.status(500).send("The user is already in your following");
  }else{
    res.status(200).send("User added: " + JSON.stringify(req.params.uid));
  }
})

//7. Recommend Movie (getRecMovie) -GET /movies
app.get("/Recmovies", function(req, res, next){
  console.log (req.query.title);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let recMovies =model.getRecMovie(model.movies, req.query.name);
  res.status(200).json(result);
})




//9. Upgrade the Account level (upgradeAccount) - Post /users
app.post("/update", function(req, res, next){
  console.log (req.query.title);
  if(req.query.title==undefined){
    req.query.title="";
  }
  let result = upgradeAccount(requestingUser);
  if(result == NULL){
      res.status(500).send("Invalid User");
  }
  res.status(200).json(result);
})

//10. Posting a new Review for movie (createReview) -Post /users
app.post("/reviewmovie/:movieid", function(req, res, next){
  console.log("reveiew movie: " + req.params.movieid);
  let result = createReview(requestingUser,req.params.movieid, req.body.review);
  console.log("result" + result )
  if(result == NULL){
      res.status(500).send("Invalid User");
  }
  res.status(200).json(result);
})




app.listen(3000);
console.log("Server listening at http://localhost:3000");
