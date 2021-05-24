const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide');
});

btn.addEventListener('click', function(){
    this.classList.toggle('slide');
    if(!this.classList.contains('slide')){
        console.log("play");
        video.play();
    } else{
        console.log("Paused");
        video.pause();
    }
});