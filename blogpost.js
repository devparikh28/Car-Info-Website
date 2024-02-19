// function commentAdd() {
//     var x = document.getElementById("newComment").value;
//     var allcom = document.getElementById("allComments");
    
    
//     var comment = document.createElement("div");
//     comment.classList.add("user-comment");

//     var commentHeader = document.getElementById("commentHeader");

//     if (!commentHeader) {
       
//         commentHeader = document.createElement("h5");
//         commentHeader.style.color = "black";
//         commentHeader.style.marginLeft = "28px";
//         // commentHeader.style.textAlign = "center" 
//         commentHeader.textContent = "YOUR COMMENT:";
//         commentHeader.id = "commentHeader";
//         allcom.appendChild(commentHeader);

//         var lineBreak = document.createElement("br");
//         allcom.appendChild(lineBreak);
//     }


//     var userText = document.createElement("li");
//     userText.style.marginLeft = "30px";
//     // userText.style.textAlign = "center"; 
//     userText.textContent = x;

    
//     var commentList = document.createElement("");
//     commentList.style.listStyleType = "disc";
//     allcom.appendChild(userText);
//     allcom.appendChild(commentList);
// }

function commentAdd() {
    var x = document.getElementById("newComment").value;
    var allcom = document.getElementById("allComments");
    
    // Check if the "YOUR COMMENT:" header exists
    var commentHeader = document.getElementById("commentHeader");

    if (!commentHeader) {
        // If the header doesn't exist, create and append it
        commentHeader = document.createElement("h5");
        commentHeader.style.color = "black"; // Change 'red' to the desired color
        commentHeader.textContent = "YOUR COMMENT:";
        commentHeader.style.marginLeft="26.75em"
        commentHeader.id = "commentHeader";
        allcom.appendChild(commentHeader);
        var lineBreak = document.createElement("br");
        allcom.appendChild(lineBreak);
    }

    // Create a new paragraph for the user comment
    var userText = document.createElement("p");
    userText.style.marginLeft = "22.75em"; // Apply left margin for the comment
    userText.textContent = x;

    // Append user comment text below the "YOUR COMMENT:" header
    allcom.appendChild(userText);
}
