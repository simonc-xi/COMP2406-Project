/*
The purpose for this page is to let user viewing their own information, 
which include username and and the account level, if the account level 
is not enough for the user, he can choose to upgrade from 
the regular level to the contributing level, and it also can be down to the backword. 
*/

//include user.json and movie.json
let users = require("./users.json");
let movies = require("./movie-data-short.json");


//change the account level
function upgradeAccount(requestingUser){
   /*
    if(!isValidUser(requestingUser)){
        return null;
    }
*/
    if(requestingUser.accountLevel === "regular"){
        requestingUser.accountLevel = ["contributing"];
        console.log("upgrade!")
    }else{
        requestingUser.accountLevel= ["regular"];
        console.log("downgrade~"); 
    }
    users[requestingUser.accountLevel] = requestingUser;
    return users[requestingUser.accountLevel];
}


//check
//display the old user
console.log (users.user0)

//print the new account level
let userA = upgradeAccount(users.user0);// this should be downgrade contributing -> regular 
console.log(userA);


