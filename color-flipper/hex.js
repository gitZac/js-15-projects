//Techniques
//Generate a random number based on the length of an array.
//Pushing the random contents of an array into a new variable

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

function getRandomNumber(){
    const max = hex.length;
    const min = 0;
    return Math.floor(Math.random() * (max - min) + min);
}

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(var i = 0; i < 6; i++){
        rn = getRandomNumber();
        console.log(hexColor[i]);
        hexColor += hex[rn];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});