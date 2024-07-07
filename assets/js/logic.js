
const blogForm = document.querySelector("#blogpost");


// toggles the light/dark modes 
function themeToggle(){
    const themeSwitcher = document.body
    themeSwitcher.classList.toggle("dark-mode");
}      


// global function to write to local storage
function writeToLocalStorage(name, data){
    localStorage.setItem(name, JSON.stringify(data));

}

// global function to read from local storage
function readFromLocalStorage(){
    return JSON.parse(localStorage.getItem("blogpost")) || []
}



// logic.js
// ------
// any logic (functions) used by both pages
//     - theme theme switcher
//     - reading/writing to/from local storage

