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
let loginButton = document.getElementById("logIn");
let headerDivLoggo = document.getElementById("headerDivLogo");
const pictures = [
  "../pictures/3f122689-d69e-407d-b248-fa62453dac2e.jpg",
  "../pictures/5b7a83da-e3f3-405a-9a63-dbc5b120c46c.jpg",
  "../pictures/5b7a83da-e3f3-405a-9a63-dbc5b120c46c.jpg",
  "../pictures/5b7a83da-e3f3-405a-9a63-dbc5b120c46c.jpg",
  "../pictures/5b7a83da-e3f3-405a-9a63-dbc5b120c46c.jpg",
  "../pictures/5b7a83da-e3f3-405a-9a63-dbc5b120c46c.jpg",
];

function homePage() {
  headerDivLoggo.innerHTML = ``;
  headerDivLoggo.innerHTML = `
    <img id="headerLogga" src="../pictures/logga2.png" alt="" />
`;

  footer.style.display = "block";
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.innerHTML = ``;
  main.innerHTML = `
    <div id="homePageBox">
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
            <div id="picture4"></div>
            <div id="picture5"></div>
            <div id="picture6"></div>
        </div>
        <div id="allPicturesTextBox">
            <p id="allPicturesButton" class="allTipsAllPictures">se hela bildgalleriet</p>
        </div>
        <p id="quote">"Det börjar alltid med en viskning"</p>
    </div>  
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
  let picturesBox = document.getElementById("picturesBox");

  alltipsButton.addEventListener("click", () => {
    goToWhisperPage();
  });

  allPicturesButton.addEventListener("click", () => {
    picturesPage();
  });
}

function welcomeFun() {
  footer.style.display = "block";
  main.innerHTML = ``;

  const welcomeContainer = document.createElement("div");
  welcomeContainer.id = "container";

  const popUpContainer = document.createElement("div");
  popUpContainer.id = "popUpContainer";

  const headerText = document.createElement("h1");
  headerText.id = "headerText";
  headerText.textContent = "Välkomna till spelet";
  popUpContainer.append(headerText);
  main.append(welcomeContainer);
  welcomeContainer.append(popUpContainer);

  const textBox = document.createElement("div");
  textBox.id = "textBox";
  popUpContainer.append(textBox);

  const storyText = document.createElement("p");
  storyText.id = "storyText";
  storyText.textContent =
    "Terminen har precis börjat på Malmö universitet, men istället för att fokusera på fastighetsrätt och kundmöten har du vaknat upp till din värsta mardröm. Baksmällan från gårdagens fest på Niagaras takvåning är ingenting jämfört med den ångest som sköljer över dig när du ser ditt namn pryda rubrikerna på MAU Gossip. Du är Alice. Du brukar hålla dig i bakgrunden, men nu är du indragen i ett nät av lögner, hemligheter och maktspel som styrs av Malmös absoluta elit. Ditt rykte och din framtida karriär står på spel.";
  textBox.append(storyText);

  const textBox2 = document.createElement("div");
  textBox2.id = "textBox2";
  const howToPlay = document.createElement("div");
  howToPlay.innerHTML = `
      <div id="playRules">
        <h3>Så här spelar du: </h3>
      </div>
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
  popUpContainer.append(univeristyTitle);

  const imgContainer = document.createElement("img");
  imgContainer.id = "imgContainer";
  popUpContainer.append(imgContainer);

  const startButton = document.createElement("button");
  startButton.id = "startButton";
  startButton.textContent = "Start";
  popUpContainer.append(startButton);

  startButton.addEventListener("click", () => {
    homePage();
  });
}
//rensa main och visa Alla viskningar
function goToWhisperPage() {
  footer.style.display = "block";
  main.innerHTML = ``;
  let headerDivLogo = document.getElementById("headerDivLogo");
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

function picturesPage() {
  document.body.classList.remove("homePage");
  headerDivLoggo.innerHTML = `Bild galleri`;
  headerDivLogo.classList.add("headerText");
  main.innerHTML = ``;
  main.innerHTML = `
  <div id="picturesPageTitlePhone">
    <p>Bildgalleri</p>
  </div>
  <div id="picturesGalleryBox">
  </div>
  `;

  let picturesBox = document.getElementById("picturesGalleryBox");

  for (let pic of pictures) {
    console.log(pic);
    let div = document.createElement("div");
    div.classList.add("pictureGallery");
    div.style.backgroundImage = `url(${pic})`;

    picturesBox.append(div);
  }
}

homePage();

homeNav.addEventListener("click", () => {
  homePage();
});

hamburgerMenu.addEventListener("click", () => {
  document.body.classList.remove("homePage"); // lägg till i era funktioner om det fuckar för er:)
  main.innerHTML = ``;
  footer.style.display = "none";
  main.innerHTML = `
    <div id="menuBox">
        <div class="menuBoxChild">
            <p id="hamburgerMenuWelcomeButton">Välkommen</p>
        </div>
        <div class="menuBoxChild">
            <p id="hamburgerMenuHomeButton">Hem</p>
        </div>
        <div class="menuBoxChild">
            <p id="hamburgerMenuWhispersButton">Alla viskningar</p>
        </div>
        <div class="menuBoxChild">
            <p id="hamburgerMenuPicturesButton">Bildgalleri</p>
        </div>
        <div class="menuBoxChild">
            <p id="hamburgerMenuSendTipsButton">Skicka in tips</p>
        </div>
    </div>
  `;
  let welcomeButton = document.getElementById("hamburgerMenuWelcomeButton");
  let homeButton = document.getElementById("hamburgerMenuHomeButton");
  let whispersButton = document.getElementById("hamburgerMenuWhispersButton");
  let picturesButton = document.getElementById("hamburgerMenuPicturesButton");
  let sendTipsButton = document.getElementById("hamburgerMenuSendTipsButton");

  welcomeButton.addEventListener("click", () => {
    welcomeFun();
  });
  homeButton.addEventListener("click", () => {
    homePage();
  });
  whispersButton.addEventListener("click", () => {
    goToWhisperPage();
  });
  picturesButton.addEventListener("click", () => {
    picturesPage();
  });
  sendTipsButton.addEventListener("click", () => {
    // senTips funktion
  });
});

//loopa ingenom
linksNav.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (event.target.id == "whispers") {
      goToWhisperPage();
    } else if (event.target.id == "welcome") {
      console.log("gå till welcome ");
    } else if (event.target.id == "pictures") {
      picturesPage();
    } else if (event.target.id == "sendTips") {
      console.log("gå till send tips ");
    }
  });
});

///ta startsidan först
//när du trycker på länkarna så byts sidan till whispers

loginButton.addEventListener("click", function (event) {
  footer.style.display = "block";
  event.preventDefault();
  main.innerHTML = ``;
  main.innerHTML = `
  <div id="loginContainer">
    <div id="logInPopup">
      <div id="popupLI">
        <div id="logga-left">
          <img id="loggaLoginIn" src="../pictures/logga2.png"></img>
        </div>
        <div id="login-right">
          <div class="input-class"> <p id="username">Användarnamn</p>
            <input id="input-username" type="text"></input>
          </div>
          <div class="input-class"> <p id="password">Lösenord</p>
            <input id="input-password" type="password"></input>
          </div>
          <button id="login-knappen">Logga in</button>
        </div>
      </div>
    </div>
  </div>`;

  const loginBtn = document.getElementById("login-knappen");
  const usernameInput = document.getElementById("input-username");
  const passwordInput = document.getElementById("input-password");

  loginBtn.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    const logInData = {
      username: "mau_gossip",
      password: "123",
    };

    if (logInData.username === username && logInData.password === password) {
      main.innerHTML = ``;
      //anropa nästa funktion
    } else {
      alert("Fel användarnamn eller lösenord. Försök igen!");
      passwordInput.value = "";
      usernameInput.value = "";
    }
  });
});
