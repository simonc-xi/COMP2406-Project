function init(){
  console.log("init() load successful");
  let searchBut = document.getElementById("search");
  searchBut.onclick = validate;  // validate the user type

}

function validate(){

  let searchText = document.getElementById("name");
  if (searchText.value.length < 1){
    console.log("validate load successful");
    alert("Enter something");

  }
}
