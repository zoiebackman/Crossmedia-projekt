let welcomeNav = document.getElementById("welcome");
let homeNav = document.getElementById("home");
let whispersNav = document.getElementById("whispers");
let picturesNav = document.getElementById("pictures");
let sendTipsNav = document.getElementById("sendTips");
let linksNav = document.querySelectorAll("#navbar .navbarText")
let main = document.querySelector("main");
let whisperContainer = document.getElementById("containerGossip");
let headerLogga = document.getElementById("headerLogga")

//rensa main och visa Alla viskningar
function goToWhisperPage() {
    main.innerHTML = ``;
    whisperContainer.style.display = "flex"
    main.appendChild(whisperContainer);
    let headerTextWhisper = document.getElementById("headerText");
    let header = document.querySelector("header")
    headerTextWhisper.style.display = ("flex")
    headerLogga.style.display = ("none")
}

//loopa ingenom 
linksNav.forEach(link => {
    link.addEventListener("click", function (event) {
        if (event.target.id == "whispers") {
            goToWhisperPage();
        }
        else if (event.target.id == "welcome") {
            console.log("gå till welcome ")
        }
        else if (event.target.id == "pictures") {
            console.log("gå till pictures ")
        }
        else if (event.target.id == "sendTips") {
            console.log("gå till send tips ")
        }
    })
});





///ta startsidan först
//när du trycker på länkarna så byts sidan till whispers