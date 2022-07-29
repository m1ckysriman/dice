
let randomNumber1= Math.floor(Math.random()*6)+1;
let randomImage = "images/dice"+ randomNumber1 +".png";
let queryImage = document.querySelectorAll("img")[0]

queryImage.setAttribute("src", randomImage)



let randomNumber2 = Math.floor(Math.random()*7)
let imageee = "images/dice"+ randomNumber2 +".png";
let query2 = document.querySelectorAll("img")[1]
query2.setAttribute("src", imageee)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won"

}else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW"   
}else{
    document.querySelector("h1").innerHTML="Player 2 won"
}
 
 