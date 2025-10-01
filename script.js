class User {
    constructor(fullname, username, password, profilePic){
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.profilePic = profilePic;
    }

    createAccount(){
        console.log('Account Created!');
    }

    showDetails(){
        console.log(`Name: ${this.fullname}, Username: ${this.username}`);
    }
}


const form = document.getElementById("input-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const profilePic = document.getElementById("profilepic").value;
    const fullName = document.getElementById("fname").value;
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    




})