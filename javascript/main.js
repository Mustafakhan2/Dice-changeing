// for Image 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let imageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource);
// for Image 2 

let randomNumber2 = Math.floor(Math.random() * 6) +1;
let imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2)

// an If statement to Declare winner 

if (randomNumber1 > randomNumber2)
{
    document.querySelector('h1').innerText = "Player 1 Wins"
}
else if (randomNumber1  < randomNumber2)
{
    document.querySelector('h1').innerText = "Player 2 Wins"
}
else
{
    document.querySelector('h1').innerText = "Draw, Play again"
}
