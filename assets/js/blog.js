
// global variable where local storage will be displayed
const blogsContainer = document.querySelector(".blogs");

// global variable for back button
const backBtn = document.querySelector("#back");

// function for displaying new data into blogsContainer
function displayLocalStorage(){
    let blogList = readFromLocalStorage();
        for (i = 0; i < blogList.length; i++){
            blogCard = document.createElement("div")
            blogCard.classList.add("blog-card")
            
            titleTag = document.createElement("h1");
            titleTag.textContent = blogList[i].title; 
    
            nameTag = document.createElement("h3");
            nameTag.textContent = blogList[i].name;
    
            contentTag = document.createElement("p");
            contentTag.textContent = blogList[i].content;
            
            blogCard.append (titleTag);
            blogCard.append (nameTag);
            blogCard.append (contentTag);
            blogsContainer.append(blogCard)
        }

} 



// back button
if (backBtn){
    backBtn.addEventListener("click", function(event){
    event.preventDefault();

    window.location.href= './index.html';
    }
)};


 displayLocalStorage();


// blog.js
// --------
// makes a call to the logic.js file for reading from local storage
// displays content on the page






