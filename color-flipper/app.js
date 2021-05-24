//Techniques:
//Get a random item from an array
//Uuse of textContent method.

const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025", "#333","#0090C5"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber(){
    const max = colors.length;
    const min = 0;
    return Math.floor(Math.random() * (max - min) + min);
}

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});
