// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
'use strict';
const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

//Add date
date.textContent = new Date().getFullYear();

//Toggle mobile nav menu
navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    //Make links dynamic
    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else{
        linksContainer.style.height = 0;
    }
});

//Sticky nav and show back to top button

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 1000){
        topLink.classList.add('show-link');
    } else{
        topLink.classList.remove('show-link');
    }
});

//Smooth Scroll
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        //Navigate to specific spot.
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }

        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
});