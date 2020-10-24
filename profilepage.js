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


