
const profileCard = document.getElementById("profileCard");
const userData = JSON.parse(localStorage.getItem("userProfile"));

if(userData){
    profileCard.innerHTML = `
    <img src="${userData.profilePic}">
    <h2>${userData.fullname}</h2>
    <p>Username: ${userData.username}</p>
`
}else {
    profileCard.innerHTML = `<p>No profile data found.</p>`;
}