let welcomeNav = document.getElementById("welcome");
let homeNav = document.getElementById("home");
let whispersNav = document.getElementById("whispers");
let picturesNav = document.getElementById("pictures");
let sendTipsNav = document.getElementById("sendTips");
let linksNav = document.querySelectorAll("#navbar .navbarText");
let main = document.querySelector("main");
let whisperContainer = document.getElementById("containerGossip");
let headerLogga = document.getElementById("headerLogga");
function homePage() {
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.innerHTML = ``;
  main.innerHTML = `
    <div id="whisperBox">
        <p id="whisperTitle">Senaste viskningar...</p>
    </div>
    <div id="gossipBox">
        <div id="girlPicture">
            <img src="../pictures/kvinna.png" alt="">
        </div>
        <div id="gossipsBox">
            <div id="gossips1" class="gossips">
                <div id="gossipsBox1" class="gossipsBox">
                    <p id="gossip1"></p>
                    <p id="gossip1Text"></p>
                </div>
                </div>
            <div id="gossips2" class="gossips">
                <div class="gossipsBox">
                    <p id="gossip2"></p>
                    <p id="gossip2Text"></p>
                </div>
            </div>
        </div>
    </div>
    <div id="allTipsBox">
        <p id="allTipsButton" class="allTipsAllPictures">alla gossips</p>
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
        <p id="allPicturesButton" class="allTipsAllPictures">se hela bildgalleriet</p>
    </div>
    <p id="quote">"Det börjar alltid med en viskning"</p>
  `;

  document.body.classList.add("homePage");

  let gossip1Title = document.getElementById("gossip1");
  let gossip1Text = document.getElementById("gossip1Text");

  let gossip2Title = document.getElementById("gossip2");
  let gossip2Text = document.getElementById("gossip2Text");

  gossip1Title.textContent = "Tagen på bar gärning";
  gossip1Text.textContent =
    "Du trodde ingen såg. Du trodde allt var under kontroll. Men på den här sidan av stan stannar inget i skuggorna särskilt länge… och jag vet exakt vad du gjorde igår kväll. Frågan är bara, vem avslöjar jag härnäst? 💋";

  gossip2Title.textContent = "XOXO";
  gossip2Text.textContent =
    "Du trodde ingen såg. Du trodde allt var under kontroll. Men på den här sidan av stan stannar inget i skuggorna särskilt länge… ";

  let alltipsButton = document.getElementById("allTipsButton");
  let allPicturesButton = document.getElementById("allPicturesButton");

  alltipsButton.addEventListener("click", () => {
    // skriv in funktion för att öppna alla tips
  });

  alltipsButton.addEventListener("click", () => {
    // skriv in funktion för att öppna alla tips
  });
}
//rensa main och visa Alla viskningar
function goToWhisperPage() {
  main.innerHTML = ``;
  let headerDivLogo = document.getElementById("headerDivLogo")
  whisperContainer.style.display = "flex";
  main.appendChild(whisperContainer);
  headerDivLogo.innerHTML = `Alla viskningar`;
  headerDivLogo.style.backgroundImage = "none";
  headerDivLogo.classList.add("headerText");
  headerDivLogo.style.width = "auto";

  // headerDivLogo.innerHTML = `Alla Viskningar`;
  // let headerTextWhisper = document.getElementById("headerText");
  // let header = document.querySelector("header");
  // headerTextWhisper.style.display = "flex";
  // headerLogga.style.display = "none";
}

homePage();
homeNav.addEventListener("click", () => {
  homePage();
});

//loopa ingenom
linksNav.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (event.target.id == "whispers") {
      goToWhisperPage();
    } else if (event.target.id == "welcome") {
      console.log("gå till welcome ");
    } else if (event.target.id == "pictures") {
      console.log("gå till pictures ");
    } else if (event.target.id == "sendTips") {
      console.log("gå till send tips ");
    }
  });
});

///ta startsidan först
//när du trycker på länkarna så byts sidan till whispers
