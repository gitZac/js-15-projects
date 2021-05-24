"use strict";
// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// Submit form
form.addEventListener('submit',  submitItem); //Callback addItem is used by reference.

//Clear items
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function submitItem(e){
    e.preventDefault(); //Prevent the form from submitting to a server by default.
    const value = grocery.value; //Get the value from the grocery input.
    const id = new Date().getTime().toString(); //Creates a unique id using the date object, which is in milliseconds. Not really that practical.

    if(value && !editFlag){
        const element = document.createElement('article');

        //add class
        element.classList.add('grocery-item');

        //add ID
        const attr = document.createAttribute('data-id'); //Makes the data id att available
        attr.value = id; //Sets the value of that att to the id we created.
        element.setAttributeNode(attr); //Puts the data-id att on the article element we created on click.

        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>`;

        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        //NOTE!! These event listeners are made available to the DOM when the first item is added after submission. 
        // The reason they are not added earlier is because the edit and delete buttons do not exist yet.

        //Append child
        list.appendChild(element); //Finally, this adds the article element that we create, as a child element to the grocery-list div.

        //display alert
        displayAlert("Item added to list", 'success');
        
        //show container
        container.classList.add('show-container'); //And then this adds the display visible class to the container so we can see it.

        //add to local storage
        addToLocalStorage(id, value);

        //set back to default
        setBackToDefault();

    } else if(value && editFlag){
        //If we are editing
        editElement.innerHTML = value;
        displayAlert('Value changed', 'success');
        //Edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        //Empty validation
        displayAlert("Please add your item below!", "danger");
    }
}

//Display Alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 3000);
}

//Clear items
function clearItems(){
   const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){ //If there are items
        items.forEach(function(item){ //Iterate over each item
             list.removeChild(item); //Remove them from the DOM.
        });
    }
    container.classList.remove('show-container');
    displayAlert("List emptied", "success");
    setBackToDefault();
    localStorage.removeItem('list');
}

//Delete function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement; //Targets the article
    const id = element.dataset.id;
    // console.log(element);
    // console.log(id);
    list.removeChild(element);
    if(list.children.length === 0){ //If there are no items
        container.classList.remove('show-container');
        setBackToDefault();
        displayAlert("List emptied", "danger");
        // removeFromLocalStorage(id);
    } else{
        displayAlert("Item removed", "danger");
    }
}
//Edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement; //target the article
    editElement = e.currentTarget.parentElement.previousElementSibling; //Target the p that's being edited
    // console.log(e.currentTarget);
    // console.log(editElement);
    grocery.value = editElement.innerHTML; //Make whatever is in the input, match the p that's being edited.
    editFlag = true;
    editID = element.dataset.id; //Get the element dataset id. Possible because we grabbed the article element already.
    submitBtn.textContent = 'edit'; //change the button text from submit to edit.
}

//set back to default
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    const grocery = {id, value}
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !==id){
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage(){
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
// ****** SETUP ITEMS **********
