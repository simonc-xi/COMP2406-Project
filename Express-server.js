const express = require('express');
const pug = require("pug");
const model = require("./logic.js");
const fs = require("fs");
const app = express();
app.set("view engine", "pug");
const session = require('express-session');

app.use(session({ secret: 'some secret here'}))


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




const requestingUser = model.users["Sop"];
console.log(requestingUser);

app.use(express.json());

//render the home page
app.get("/", function(req, res, next){
  let data = renderHome("./pages/Home.pug",{})
  res.status(200).send(data);
})

app.get("/Homepage.js", function(req, res, next){
  fs.readFile("Homepage.js", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})
//render sign up page
app.get("/signup", function(req, res, next){
  let data = renderSignup("./pages/Signup.pug",{})
  res.status(200).send(data);
})

//render sign up page
app.get("/signin", function(req, res, next){
  let data = renderLogin("./pages/login.pug",{})
  res.status(200).send(data);
})


app.get("/style.css", function(req, res, next){

  fs.readFile("style.css", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      console.log("/style.css");
      res.status(200).send(data);
  });
})

app.get("/img/ilovem.jpg", function(req, res, next){
  fs.readFile("img/ilovem.jpg", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})

app.get("/img/ilovemb.jpg", function(req, res, next){
  fs.readFile("img/ilovemb.jpg", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})

app.get("/login.js", function(req, res, next){
  fs.readFile("login.js", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})

//Creating a new user (createUser), Input:  password/username, Output: user information
app.post("/users", function(req, res, next){
//the request body contains the new user information
console.log(req.body);
let result = model.createUser(req.body);
if(result){
  res.status(200).send("User added: " + JSON.stringify(result));
}else{
  res.status(500).send("Failed to add user.");
}
})


//get request for the Reading a user (getUser), input the uid to get the user information
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


//Searching for subscribed users (searchUsers),
app.get("/users", function(req, res, next){
  console.log (req.query.name);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result = model.searchUsers(requestingUser, req.query.name);
  res.status(200).json(result);
})


//Searching for moive (searchMovie),
app.get("/SearchMovies", function(req, res, next){
  console.log (req.query.title);
  if(req.query.title==undefined){
    req.query.title="";
  }
  let result =model.searchMoive(requestingUser, req.query.name);
  res.status(200).json(result);
})


//Searching for People (searchPeople),
app.get("/SearchPeople", function(req, res, next){
  console.log (req.query.title);
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
