

// global variable selectors for form.js
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
 
const submitBtn = document.querySelector("#submit");


// empty array to load new info 
let blogList = []


function start(){
    const storedBlogList = readFromLocalStorage("blogpost");
    blogList = Array.isArray(storedBlogList) ? storedBlogList : [];
}

// event listener that triggers on button click to write new data into local storage
submitBtn.addEventListener("click", function(event){
    event.preventDefault();

  
    const name = nameInput.value;
    const title = titleInput.value;
    const content = contentInput.value

// checks if arrays don't contain empty values 
    if (name?.length === 0 || title?.length === 0 || content?.length === 0){
        alert ("Please fill out required fields");
    } else {

        const article = {
            name, content, title
        }
        console.log(article);

        blogList.push(article)

        writeToLocalStorage("blogpost", blogList);
        window.location.href= './blog.html';
    }
    


});

start();


// form.js
// -------
// reads values from form when submitted
// makes a call to the logic.js file for writing to local storage