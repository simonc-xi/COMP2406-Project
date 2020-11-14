

function init(){
  console.log("init() load successful");
  let searchBut = document.getElementById("search");
  searchBut.onclick = validate;  // validate the user type
  //display();
  let regBut = document.getElementById("sign");
  regBut.onclick = signin;  // validate the user type

}

function validate(){
  console.log("validating the user input");
  let searchText = document.getElementById("name");
  if (searchText.value.length < 1){
    console.log("validate load successful");
    alert("Please Enter something ");

  }
}


let regBut = document.getElementById("sign");
regBut.onclick = signin;



function signin(){

  window.location.href = "http://localhost:3000/signin";

}
