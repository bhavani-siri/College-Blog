const validUsername = "admin";
const validPassword = "password";
const loginPage = document.getElementById("loginPage");
const blogPage = document.getElementById("blogPage");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const logoutBtn = document.getElementById("logoutBtn");
const submitCommentBtn = document.getElementById("submitCommentBtn");
const commentInput = document.getElementById("commentInput");
const commentsSection = document.getElementById("commentsSection");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        loginPage.style.display = "none";
        blogPage.style.display = "block";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
logoutBtn.addEventListener("click", function() {
    blogPage.style.display = "none";
    loginPage.style.display = "block";
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
    errorMessage.textContent = '';
});
submitCommentBtn.addEventListener("click", function() {
    const commentText = commentInput.value;
    if (commentText.trim() !== "") {
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.textContent = commentText;
        commentsSection.appendChild(comment);
        commentInput.value = "";
    } else {
        alert("Please write a comment before submitting.");
    }
});