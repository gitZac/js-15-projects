const navToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeToggle = document.querySelector(".close-btn");


navToggle.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
});

closeToggle.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
});
