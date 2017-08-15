// message in the console
console.log("Hi there, welcome to the JavaScript console!");



// initialize the application
var app = new Object();
console.log("becky chan")

app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->
  var pokeball = document.getElementById("pokeball");
  pokeball.className = "shake";
  console.log("shaking done!")
} // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
  // code BELOW this line for challenge #2 -->
  var name = prompt("Hello! What is your name?");
  var nameElement = document.getElementById("first-name");
  nameElement.innerHTML = name;

  console.log("name is done! " + name)

} // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
  var website = prompt("What is your favorite website?");
  var webElement = document.getElementById("favorite-website")
  webElement.innerHTML = website;
  console.log("website done!" + website)

  //check if site inputted includes "https://"
  var httpStatus = website.slice(0, 7);
  var http = "http://"
  httpStatus !== "http://" ? website = http.concat(website) : website;
  // console.log(website)
  //check if end of input includes ".com"
  var comStatus = website.slice(-4, website[length -1]);
  var com = ".com";
  comStatus !== ".com" ? website = website.concat(com) : website;
  //site ready for use 
  console.log(website + "good")


  //help from Stack Overflow
  var link = document.createElement('a');//create link
  link.setAttribute('href', website);//set href
  console.log(link);
  link.innerHTML = website;//set text to be seen
  document.body.appendChild(link);//add to body


} 


// <-- code ABOVE this line for challenge #3 & bonus




