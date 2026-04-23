let welcomeNav = document.getElementById("welcome");
let homeNav = document.getElementById("home");
let whispersNav = document.getElementById("whispers");
let picturesNav = document.getElementById("pictures");
let sendTipsNav = document.getElementById("sendTips");
let linksNav = document.querySelectorAll("#navbar .navbarText");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let whisperContainer = document.getElementById("containerGossip");
let headerLogga = document.getElementById("headerLogga");
let hamburgerMenu = document.getElementById("hamburgerMenu");

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
function welcomeFun() {
  main.innerHTML = ``;

  const headerText = document.createElement("h1");
  headerText.id = "headerText";
  headerText.textContent = "Välkomna till spelet";
  main.append(headerText);

  const textBox = document.createElement("div");
  textBox.id = "textBox";
  main.append(textBox);

  const storyText = document.createElement("p");
  storyText.id = "storyText";
  storyText.textContent =
    "Terminen har precis börjat på Malmö universitet, men istället för att fokusera på fastighetsrätt och kundmöten har du vaknat upp till din värsta mardröm. Baksmällan från gårdagens fest på Niagaras takvåning är ingenting jämfört med den ångest som sköljer över dig när du ser ditt namn pryda rubrikerna på MAU Gossip. Du är Alice. Du brukar hålla dig i bakgrunden, men nu är du indragen i ett nät av lögner, hemligheter och maktspel som styrs av Malmös absoluta elit. Ditt rykte och din framtida karriär står på spel.";
  textBox.append(storyText);

  const textBox2 = document.createElement("div");
  textBox2.id = "textBox2";
  const howToPlay = document.createElement("div");
  howToPlay.innerHTML = `
        <h3>Så här spelar du: </h3>
        <p>I det här spelet är din mobil och din förmåga att lägga pussel dina viktigaste verktyg. För att rentvå ditt namn och hitta personen bakom skandalbloggen måste du navigera genom följande: </p>
        <ul>
        <li><strong>Granska sociala medier:</strong> Håll koll på Instagram-stories, inlägg och kommentarer. Varje bild kan innehålla en detalj som andra missat.</li>
        <li><strong>Hitta ledtrådar i verkligheten: </strong> Besök fysiska platser på campus, såsom biblioteket, kaféet och Niagaras tak. Letar du noga kan du hitta allt från kvarglömda böcker till gömda lösenord.</li>
        <li><strong>Infiltration: </strong> Genom att hitta användarnamn och lösenord får du tillgång till privata chattar och dolda sidor. Men var försiktig – det du hittar kan förändra din bild av dina klasskamrater för alltid.</li>
        <li><strong>Dra slutsatser: </strong> Koppla ihop koordinater, trasiga fotografier och anonyma tips för att lista ut vem som egentligen pratar med vem – och varför.</li>
        </ul>`;

  textBox.append(howToPlay);
  textBox.append(textBox2);

  const univeristyTitle = document.createElement("h2");
  univeristyTitle.id = "universityTitle";
  univeristyTitle.textContent = "Fastighetsförmedling ME2024";
  main.append(univeristyTitle);

  const imgContainer = document.createElement("img");
  main.append(imgContainer);
  imgContainer.id = "imgContainer";

  const startButton = document.createElement("button");
  main.append(startButton);
  startButton.id = "startButton";
  startButton.textContent = "Start";

  startButton.addEventListener("click", () => {
    homePage();
  });
}
//rensa main och visa Alla viskningar
function goToWhisperPage() {
  main.innerHTML = ``;
  whisperContainer.style.display = "flex";
  main.appendChild(whisperContainer);
  let headerTextWhisper = document.getElementById("headerText");
  let header = document.querySelector("header");
  headerTextWhisper.style.display = "flex";
  headerLogga.style.display = "none";
}

homePage();

homeNav.addEventListener("click", () => {
  homePage();
});

hamburgerMenu.addEventListener("click", () => {
  main.innerHTML = ``;
  footer.style.display = "none";
  main.innerHTML = `
    <div #menuBox">
        <div class="menuBoxChild">
            <p>Välkommen</p>
        </div>
        <div class="menuBoxChild">
            <p>Hem</p>
        </div>
        <div class="menuBoxChild">
            <p>Alla viskningar</p>
        </div>
        <div class="menuBoxChild">
            <p>Bildgalleri</p>
        </div>
        <div class="menuBoxChild">
            <p>Skicka in tips</p>
        </div>
    </div>
  `;
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
