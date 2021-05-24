// 'use strict';
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Porterhouse",
    category: "dinner",
    price: 49.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },  
];
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
const filterBtns = document.querySelectorAll('.filter-btn');


//Load items when dom is ready.
window.addEventListener('DOMContentLoaded', function(){
  getMenuItems(menu);
  getMenuButtons();
});

function getMenuButtons(){
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) { //If the item category is not already in the array
      values.push(item.category); //Push the new category into the array.
    }
    return values;
  }, ["all"]);

  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" data-id="${category}" type="button">${category}</button>`;
  }).join('');

  btnContainer.innerHTML = categoryBtns;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
      const category = evt.currentTarget.dataset.id; //Get the category of the data-id that is clicked on
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
        //Look in the menu array object for everything that 
        //matches the filter clicked on, and bind it to menuCategory.
      });

      if (category === 'all') {
        getMenuItems(menu); //Call the whole menu normally.
      } else {
        getMenuItems(menuCategory);
      }
    });
  });
}

function getMenuItems(newMenu) {
  let displayMenu = newMenu.map(function (item) {
    //map() calls a function on each item that is gets in the array.
    //Make the return value dynamic. Works kind of like a wordpress loop.
    
    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;

  //So here, the map funciton is grabbing each object in the array, and returning an html string with the property values from the object injected dynamically in the correct places. 
  });

  // console.log(displayMenu);

  //displayMenu is still returned as an array, so we need to convert it to a giant string so that it can be injected into html.
  displayMenu = displayMenu.join();

  //finally, add the converted string to innerhtml, inside of .section-center.
  sectionCenter.innerHTML = displayMenu;
}


