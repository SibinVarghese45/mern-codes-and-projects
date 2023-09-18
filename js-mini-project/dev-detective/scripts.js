const profileImg = document.getElementById("profile-img");
const userInfoSection = document.querySelector(".user-info-section");
const modeBtn = document.querySelector(".mode");
const wrapper = document.querySelector(".wrapper");
const headingContent = document.querySelector(".headingContent")
const inputClass = document.querySelector(".input-class")
const nameUser = document.querySelector(".user-name");
const joinedDate = document.querySelector(".joined-date");
const usernameLink = document.querySelector("[username-link]")
const formSubmit = document.querySelector(".search-section")
const noResult = document.querySelector(".no-results")
const loadingScreen = document.querySelector(".loading-class")
const userBio = document.querySelector("[user-bio]");
const repoInfo = document.querySelector("[repo-info]");
const followersInfo = document.querySelector("[followers-info]");
const followingInfo = document.querySelector("[following-info]");
const locationInfo = document.querySelector(".location");
const websiteInfo = document.querySelector(".website-info");
const twitterInfo = document.querySelector(".twitter-info");
const companyInfo = document.querySelector(".company-info");

let username = "Sibin987"
fetchAccountInfo(username);

modeBtn.style.color = "black";
headingContent.style.color = "black"

function changeMode(){
    wrapper.classList.toggle("active");
    if(modeBtn.innerHTML === "Dark Mode"){
        modeBtn.innerHTML = "Light Mode";
        modeBtn.style.color = "white";
        headingContent.style.color = "white"
    }else{
        modeBtn.innerHTML = "Dark Mode";
        modeBtn.style.color = "black";
        headingContent.style.color = "black"
        inputClass.classList.add("active")
    }
}

// modeBtn.addEventListener("click", ()=> {
//     changeMode();
// })

if(formSubmit){
    formSubmit.addEventListener("submit", (e) => {
        e.preventDefault();
        if(inputClass.value === " "){
            return ;
        }
        let input = inputClass.value;
        //console.log(input);
        
        fetchAccountInfo(input);
    })
}


async function fetchAccountInfo(username){

    userInfoSection.classList.remove("active");
    loadingScreen.classList.add("active");

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        loadingScreen.classList.remove("active");
        userInfoSection.classList.add("active");
        const data = await response.json();
        await extractInformation(data)    
    }
    catch(e){
        console.log(e)
    }
}

async function extractInformation(data){
    // data
    
    const name = await data.name;
    // console.log(name);

    const username = await data.login;
    // console.log(username);

    const createdAt = await data.created_at;
    // console.log(createdAt);

    const bio = await data.bio;
    // console.log(bio);

    const repos = await data.public_repos;
    // console.log(repos);

    const followers = await data.followers;
    // console.log(followers);

    const following = await data.following;
    // console.log(following);

    const location = await data.location;
    // console.log(location);

    const blog = await data.blog;
    // console.log(blog);

    const twitter_username = await data.twitter_username;
    // console.log(twitter_username);

    const company = await data.company;
    // console.log(company);

    const profilePicture = await data.avatar_url;

    const githubAccLink = await data.html_url;

    const accountInfo = await {name, username,
        createdAt, bio, repos, followers, following, location, 
        blog, twitter_username, company, profilePicture, githubAccLink}


    await renderInfo(accountInfo);

}

async function renderInfo(accountInformation){
    // working
    
    if(accountInformation.username == undefined){
        noResult.classList.add("active")
        return;
    }else{
    //name display
    // if(!inputClass.value){
    //     nameUser.innerHTML = await accountInformation.username
    // }
    // if(inputClass.value != accountInformation.username){
    //     nameUser.innerHTML = await accountInformation.username
    // }
    nameUser.innerHTML = await accountInformation.username
    
    // date conversion
    let arr = await ["", "January", "February", "March", "April",
     "May", "June", "July", "August", "September", "October",
    "November", "December"]
    const date = await new Date(accountInformation.createdAt);
    // console.log(arr[date.getMonth()+1]);
    // console.log(date.getDate());
    // console.log(date.getFullYear());

    // date display
    joinedDate.innerHTML = await `Joined ${date.getDate()} ${arr[date.getMonth()+1]} 
     ${date.getFullYear()}`
    
    //  image display
    profileImg.src = await accountInformation.profilePicture;

    // username display
    usernameLink.href = await accountInformation.githubAccLink;
    usernameLink.innerHTML = await `@${accountInformation.username}`;

    noResult.classList.remove("active");

    // User Bio
    userBio.innerHTML = accountInformation.bio

    // github info
    repoInfo.innerHTML = accountInformation.repos;
    followersInfo.innerHTML = accountInformation.followers;
    followingInfo.innerHTML = accountInformation.following;

    //social media info
    if(accountInformation.location == undefined){
        locationInfo.textContent = "Not Available"
    }
    else
    {
        locationInfo.textContent = accountInformation.location;
    }

    if(accountInformation.blog == ""){
        websiteInfo.innerHTML = "Not Available"
    }
    else
    {
        websiteInfo.textContent = accountInformation.blog;
    }

    if(accountInformation.twitter_username == undefined){
        twitterInfo.textContent = "Not Available"
    }
    else
    {
        twitterInfo.textContent = accountInformation.twitter_username;
    }

    if(accountInformation.company == undefined)
    {
        companyInfo.textContent = "Not Available"
    }
    else
    {
        companyInfo.textContent = accountInformation.company;
    }
   
}

}




