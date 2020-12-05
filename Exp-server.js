const express = require('express');
const pug = require("pug");
const model = require("./logic.js");
const fs = require("fs");
const app = express();
app.set("view engine", "pug");
const session = require('express-session');

app.use(session({ secret: 'some secret here'}))
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

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
const renderProfile = pug.compileFile('pages/Profile.pug');
const renderMovie = pug.compileFile('pages/Movie.pug');
const renderView = pug.compileFile('pages/View.pug');


app.use(express.static("stylesheets"));



//const requestingUser = model.users["Sop"];
//console.log(requestingUser);

app.use(express.json());



function auth(req, res, next){
  if(!req.session.user){
    res.status(403).send(" You need to logged in to view");
    return;
  }
  next();
}
app.get('/logOut', logOut);
app.get("/movie/:mid", getMovie);


app.post('/signUpUser', signUpUser, logInUser);
app.post('/logInUser', logInUser);
app.post("/moive/:mid", addWatchList, getMovie);

//check the cookie been create
app.use('/', function(req, res, next){
  console.log(req.session);
  next()
})


//render the home page
app.get("/", function(req, res, next){
  let movArr = model.getRanMovie();
  let movName = movArr[0].Title;

  console.log(movArr[0].Title);
  console.log(movArr[0].poster);
  let data = renderHome({movie: movArr, name: movName, session: req.session});
  res.status(200).send(data);
})


//render the movie page  get

function getMovie(req, res, next){
  console.log("id = "+ req.params.mid)

  let movArr = model.getMovie(req.params.mid);
  let url = movArr[0].Poster;
  //let movName = getFirstStr(movArr[0].Title)
  let data = renderMovie({movie: movArr, link: url, session:req.session, movName: movArr[0].Title});
  res.status(200).send(data);
}

// add the movie to users watch List -post/subscribeMovie
function addWatchList(req, res, next){
  console.log(req.params.mid);
  //res.status(200).send("name = " + req.body.name);
  next();
}



// Homepage JS function
app.get("/Homepage.js", function(req, res, next){
  fs.readFile("Homepage.js", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})

// provide css style
app.get("/movie/style.css", function(req, res, next){
  fs.readFile("stylesheet/style.css", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})

//render sign up page
app.get("/signup", function(req, res, next){
  let data = renderSignup("./pages/Signup.pug",{session:req.session})
  res.status(200).send(data);
})

//render sign up page
app.get("/signin", function(req, res, next){
  let data = renderLogin("./pages/login.pug",{session:req.session})
  res.status(200).send(data);
})

app.get("/login", function(req, res, next){
  let data = renderLogin("./pages/login.pug",{session:req.session})
  res.status(200).send(data);
})

//render the home page
app.get("/profile", function(req, res, next){

  let data = renderProfile({user: req.session.user});
  res.status(200).send(data);
})




//render the movie
app.get("/view", function(req, res, next){
  let data = renderView();
  res.status(200).send(data);
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

app.get("/movie/img/ilovem.jpg", function(req, res, next){
  fs.readFile("img/ilovem.jpg", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})


app.get("/users/img/ilovem.jpg", function(req, res, next){
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

app.get("/users/ilovemb.jpg", function(req, res, next){
  fs.readFile("img/ilovemb.jpg", function(err, data){
    if(err){
      res.status(500).send("Unknown resources");
      return;
    }
      res.status(200).send(data);
  });
})

app.get("/movie/img/ilovemb.jpg", function(req, res, next){
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

//the post request for the log in function
function logInUser(req, res, next){
  console.log("username :" + req.body.username);
  console.log("password : " + req.body.password);


  if(model.authenticateUser(req.body.username, req.body.password)){
    //they have logged in successfully
    req.session.user = model.users[req.body.username];
    req.session.loggedin = true;
    res.status(200).redirect("/users/" + req.body.username);
  }else{
    //they did not log in successfully.
    res.status(401).send("You enter the wrong username or password. Please Try agian");
  }
}



//the post request for the sign up function
function signUpUser(req, res, next){
  console.log("signUpUser function");
  let newUser =req.body;
  if(model.users.hasOwnProperty(newUser.username)){
    res.status(300).send("You already register");
  }else{
    model.createUser(newUser);
    console.log(model.users)
    // redirect to login function
    next();
  }
}

function logOut(req, res){
  req.session.destroy();
  res.redirect('/login');
}


//2. get request for the Reading a user (getUser), input the uid to get the user information
app.get("/users/:uid", auth,function(req, res, next){
  console.log("Getting user with name: " + req.params.uid);
  console.log("req.session.user = " + req.session.user);
  //let requestUser = model.users[req.params.uid];
  let result = model.getUser(req.session.user, req.params.uid);
  if(result == null){
    res.status(404).send("Unknown user")
  }else{
    let data = renderProfile({user: result});
    res.status(200).send(data);
    return;
  }
})


//3. Searching for users (searchUsers),
app.get("/users", function(req, res, next){
  console.log (req.query.name);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result = model.searchUsers(req.session.user, req.query.name);
  res.status(200).json(result);
})


//Searching for moive (searchMovie),
app.post("/SearchMovie", function(req, res, next){
  console.log (req.query.name);
  if(req.query.title==undefined){
    req.query.title="";
  }
  let result =model.searchMovie(req.session.user, req.query.name);

  let data = renderMovie({movie: result});
  res.status(200).send(data);
})


//Searching for People (searchPeople),
app.get("/SearchPeople", function(req, res, next){
  console.log (req.query.title);
  if(req.query.name==undefined){
    req.query.name="";
  }
  let result =model.searchPeople(req.session.user, req.query.name);
  res.status(200).json(result);
})

//6. Making a subscribe (makeSubscribe) -Post /users
app.post("/SubscibeUsers/:uid", function(req, res, next){
  console.log("req.params.uid = " + req.params.uid);
  let result = model.makeSubscribe(req.session.user.username, req.params.uid);
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
app.post("/upgrade/:uid", auth,function(req, res, next){
  console.log (req.params.uid);

  let result = upgradeAccount(req.session.user);
  console.log(result);
  if(result == NULL){
      res.status(500).send("Invalid User");
  }
  let data = renderProfile({user: result});
  res.status(200).send(data);
  return;
})

//10. Posting a new Review for movie (createReview) -Post /users
app.post("/reviewmovie/:movieid", function(req, res, next){
  console.log("reveiew movie: " + req.params.movieid);
  let result = createReview(req.session.user,req.params.movieid, req.body.review);
  console.log("result" + result )
  if(result == NULL){
      res.status(500).send("Invalid User");
  }
  res.status(200).json(result);
})






app.listen(3000);
console.log("Server listening at http://localhost:3000");
