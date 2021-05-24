"use strict";
const articles = document.querySelectorAll('.content');
const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');

about.addEventListener('click', function(e){
    //Adding an event listener for an element this high in the DOM will give you access to everything below it.
    // console.log(e.target);
    //We can also target the dataset id, which is an attribute we added to the buttons. 
    const id = e.target.dataset.id;

    if(id){ //Checks if we are clicking on something that has an id.
        tabBtns.forEach(function(btn){
            //Removes active from all buttons first to make sure there are no conflicts.
            //Adds 'active' to the target button. Remeber the code is wrapped in an if statement that
            // is checking if the thing you are clicking on has an id.
            btn.classList.remove('active');
            e.target.classList.add('active');


            //Now you have to loop through all of the articles (content classes) and remove active from them.
            articles.forEach(function(article){
                article.classList.remove('active');
            });

            const articleID = document.getElementById(id); //Set a new variable called articleID that has an ID equal to whatever dataset is contained in the button. Basically, finds an element in the DOM with a dataset id.
            articleID.classList.add('active');
        });
    }
});