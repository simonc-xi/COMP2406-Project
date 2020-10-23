let users = require("./users.json");

//check the user is already exists or not.
function isValidUser(userObj){
    if(!userObj){
      return false;
    }
    if(!userObj.username || !users.hasOwnProperty(userObj.username)){
      return false;
    }
    return true;
}

function createUser(newUser){
    //Check the object is valid
    //This just ensures the object has a username and password
    //You may have more complex logic for your project
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

const assert = require("assert");
console.log("Creating some users");

let user1 = createUser({username: "Sophia", password: "12345"});
let user2 = createUser({username: "bbbbb", password:"12345"});
let user3 = createUser({username: "Candy", password:"12345"});
let user4 = createUser({username: "Lulu", password: "12345"});

assert(Object.keys(users).length === 6, "Unexpected number of users");