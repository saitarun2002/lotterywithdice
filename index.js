var num = prompt("enter your lotter ticket number from 1 to 6");
var randomDiceimage2 =  "dice" + num + ".png";
var image2 = document.querySelectorAll("img")[0];
image2.setAttribute("src", randomDiceimage2);


var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceimage1 =  "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceimage1);

if(num == randomNumber1){
    document.querySelector("h1").innerHTML = "you won, congratulations";
  }
  else{
    document.querySelector("h1").innerHTML= "you Lost, Try again"
  }