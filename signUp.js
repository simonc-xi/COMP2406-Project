//load the initial user.json
let users = require("./users.json");


//Check the object is valid
//This just ensures the object has a username and password
//You may have more complex logic for your project
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
        users[newUser.username] = newUser;

        return users[newUser.username];
}


//check
const assert = require("assert");
console.log("Creating some users");
//check the createUser function

let userA = createUser({username: "rand", password: "12345"});
let userB = createUser({username: "rend", password:"12345"});
let userC = createUser({username: "Li", password:"12345"});
let userD = createUser({username: "Lulu", password: "12345"});

assert(Object.keys(users).length === 7, "Unexpected number of users");
//display the newly create user
console.log("Newly created users:");
console.log(userA);
console.log(userB);
console.log(userC);
console.log(userD);
