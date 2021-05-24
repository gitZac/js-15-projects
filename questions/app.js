//DOM TRAVERSAL
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){ //If btn wasn't added as an argument here, the click event would apply to all buttons, and not just the one you want to click.
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;        
//         question.classList.toggle('show-text');
//     });
// });

//USING SELECTORS INSIDE ELEMENT

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){ //Loop through all questions
    const btn = question.querySelector('.question-btn'); //Get all the btns
    btn.addEventListener('click', function(){ //Add an event listener to all btns
        //Loop through all the questions, and remove show-text from item you are not using. You need to use a different paramater because 'question' is already in use.
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
       question.classList.toggle('show-text'); //Add show-text to question div when given btn at question is clicked.
    });
});