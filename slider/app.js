const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let counter = 0;

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
    console.log(index);
});
//For every side, set the left value to the index, * 100%. So i = 100%, i = 200%, etc. THis puts the slides all right next to each other in the CSS with absolute positioning and hides them from view. We want to do this in the javascript, as opposed to nth child in css to make the slider dynamic.

nextBtn.addEventListener('click', function(e){
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function(e){
    counter--;
    carousel();
});

function playCarousel(){
    counter++;
    carousel();
}

setInterval(playCarousel, 3000);

function carousel(){
    if(counter === slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
        console.log(slide.style.transform);
    });
}
//For the given slide div, translateX to that slide when clicked. The counter lets us calculate the correct value to translate the slider to.