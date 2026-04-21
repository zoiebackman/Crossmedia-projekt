let welcomeNav = document.getElementById("welcome");
let homeNav = document.getElementById("home");
let whispersNav = document.getElementById("whispers");
let picturesNav = document.getElementById("pictures");
let sendTipsNav = document.getElementById("sendTips");

let main = document.querySelector("main");

function homePage() {
  main.innerHTML = ``;
  main.innerHTML = `
    <div id="whisperBox">
        <p id="whisperTitle">Senaste viskningar...</p>
    </div>
    <div id="gossipBox"></div>
    <div id="allTipsBox">
        <p class="allTipsAllPictures">alla gossips</p>
    </div>
    <div id="selectedPicturesBox">
        <p id="selectedPicturesText">Utvalda ögonblick</p>
    </div>
    <div id="picturesBox">
        <div id="picture1"></div>
        <div id="picture2"></div>
        <div id="picture3"></div>
    </div>
    <div id="allPicturesTextBox">
        <p class="allTipsAllPictures">se hela bildgalleriet</p>
    </div>
    <p id="quote">"Det börjar alltid med en viskning"</p>
  `;
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
}

homePage();
