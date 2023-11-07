var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

var i1= document.getElementsByTagName("img")[0];
var i2= document.getElementsByTagName("img")[1];

i1.setAttribute("src",("./images/"+ "dice" + rand1 +".png"));
i2.setAttribute("src",("./images/"+ "dice" + rand2 +".png"));

var h = document.getElementsByTagName("h1");

if (rand1>rand2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}
if(rand1<rand2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}
if(rand1 == rand2){
    document.querySelector("h1").innerHTML = "Draw!!!";
}
