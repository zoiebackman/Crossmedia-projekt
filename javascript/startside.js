let welcomeNav = document.getElementById("welcome");
let homeNav = document.getElementById("home");
let whispersNav = document.getElementById("whispers");
let picturesNav = document.getElementById("pictures");
let sendTipsNav = document.getElementById("sendTips");

let main = document.querySelector("main");

function homePage() {
  main.innerHTML = ``;
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";

  let whisperBox = document.createElement("div");
  whisperBox.id = "whisperBox";
  let whisperTitle = document.createElement("h1");
  whisperTitle.textContent = "Senaste viskningar...";
  whisperTitle.id = "whisperTitle";
  whisperBox.append(whisperTitle);

  let div = document.createElement("div");
  div.id = "gossipBox";

  let allTipsBox = document.createElement("div");
  allTipsBox.id = "allTipsBox";
  let allTips = document.createElement("p");
  allTips.textContent = "alla gossips";
  allTips.id = "allTips";
  allTipsBox.append(allTips);

  main.append(whisperBox);
  main.append(div);

  main.append(allTipsBox);
}

homePage();
