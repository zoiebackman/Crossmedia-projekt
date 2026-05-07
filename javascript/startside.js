let welcomeNav = document.getElementById("welcome");
let homeNav = document.getElementById("home");
let whispersNav = document.getElementById("whispers");
let picturesNav = document.getElementById("pictures");
let sendTipsNav = document.getElementById("sendTips");
let linksNav = document.querySelectorAll("#navbar .navbarText");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let containerGossip = document.getElementById("containerGossip");
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

  headerDivLoggo.style.width = "300px";
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
  main.innerHTML = `
  <main>
    <div id="containerGossip">
      <div class="boxGossip">
        <p class="dateText"> 24/4/2026</p>
        <p class="textGossip">“Ibland händer de mest intressanta sakerna mitt framför ögonen på folk… utan att de
          märker
          något
          alls. Vår lilla charmör Leon verkade i alla fall inte särskilt blyg med att sprida leenden, blickar och lite
          väl närgången energi till mer än en tjej under kvällen.
          Det märkliga? Hans flickvän var faktiskt där också. Bara några meter bort. Helt ovetande.
          Så frågan är… är vissa hemligheter skickligare på att gömma sig än andra, eller är vissa bara bättre på att
          inte vilja se?</p>
        <p class="xoxoText">XOXO</p>
      </div>

      <div class="boxGossip">
        <p class="dateText"> 24/4/2026</p>
        <p class="textGossip">“Ibland händer de mest intressanta sakerna mitt framför ögonen på folk… utan att de
          märker
          något
          alls. Vår lilla charmör Leon verkade i alla fall inte särskilt blyg med att sprida leenden, blickar och lite
          väl närgången energi till mer än en tjej under kvällen.
          Det märkliga? Hans flickvän var faktiskt där också. Bara några meter bort. Helt ovetande.
          Så frågan är… är vissa hemligheter skickligare på att gömma sig än andra, eller är vissa bara bättre på att
          inte vilja se?

        </p>
        <p class="xoxoText">XOXO</p>
      </div>
      <div id="containerPages">
        <p class="textPages">Föregående sida</p>
        <p class="textPages" id="pageNum">1</p>
        <p class="textPages">Nästa sida</p>
      </div>
    </div>
  </main>
  `;
  containerGossip.style.display = "flex";
}

function picturesPage() {
  document.body.classList.remove("homePage");
  headerDivLoggo.innerHTML = `Bild galleri`;
  headerDivLogo.classList.add("headerText");
  headerDivLoggo.style.width = "500px";
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
      momentOfTruth()
    } else {
      alert("Fel användarnamn eller lösenord. Försök igen!");
      passwordInput.value = "";
      usernameInput.value = "";
    }

  });
});

function momentOfTruth(){
   const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");

  if (headerLogoMobil) {
    headerLogoMobil.style.display = "none";
  }

  if (headerDivLogo) {
    headerDivLogo.innerHTML = "Sanningens ögonblick";
    headerDivLogo.classList.add("momentOfTruthText"); 
  }
  main.innerHTML = ``;
  main.innerHTML = `
  <div id="textWrapperMoment">
   <h2 id="momentH2">Sanningens ögonblick...</h2>
    <p id="momentTextP">Nu är frågan på allas läppar: vem är egentligen geniet bakom den här bloggen? Jag vet att ni dör av nyfikenhet, men gissningar är inte alltid gratis...Låt gissningsleken börja.</p>
  <div id="inputRutaMoment">
   <p id="questionMoment">Vem är MAU Gossip?</p>
   <input id="inputMomentAnswer"type="password"></input>
   <p id="notCorrectPassword"></p>
   </div>
  </div>
  <button id="nextButtonMoment">Nästa</button>`

  const nextButtonMoment = document.getElementById("nextButtonMoment");
  const momentInput = document.getElementById("inputMomentAnswer");
  const notCorrectPassword = document.getElementById("notCorrectPassword")

  notCorrectPassword.style.display= "none";

  let attempts = 0;

  nextButtonMoment.addEventListener("click", function (event){
    const password = momentInput.value.toLowerCase();
    const correctPassword = "lovisa";

    if(password === correctPassword){
      reveal()
    } else {
      attempts++
    }


    if(attempts === 1){
      notCorrectPassword.style.display = "block";
      notCorrectPassword.textContent = "Du har en chans till att skriva rätt, annars är det Game Over"
      momentInput.value = "";
      momentInput.focus()
    } else if(attempts >= 2){
      main.innerHTML = ``;
      gameOver()
    }
  })

}

function gameOver() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");

  if (headerLogoMobil) {
    headerLogoMobil.style.display = "none";
  }

  if (headerDivLogo) {
    headerDivLogo.innerHTML = "Game Over";
    headerDivLogo.classList.add("gameOverText"); 
  }

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="gameOverContainer">
  <div id="gameOverWrapper"></div>
  <h1 id="GameOverTitle">Game Over</h1>
  <p id ="firstGameover-text">Det verkar som om mysteriet var lite för sofistikerat för vissa. Mau Gossip har spelat spelet fläckfritt – det kan vi alla konstatera med en gnutta avundsjuka.
Dessvärre (ett ord som låter betydligt lyxigare än ett simpelt tyvärr) räckte din intuition inte hela vägen fram den här gången. Gåtan förblir olöst i dina händer, och vi som verkligen hade hoppats på att du skulle briljera på podiet. Men i den här världen får man inga poäng för att bara försöka.
Bättre lycka nästa gång. Om det ens finns en nästa gång...</p>
  <p id ="secondGameover-text">You know you love me. </p>
  <p id="thirdGameover-text">XOXO</p>
  </div>
  `;
}

function reveal(){
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");

  if (headerLogoMobil) {
    headerLogoMobil.style.display = "none";
  }

  if (headerDivLogo) {
    headerDivLogo.innerHTML = "Reveal";
    headerDivLogo.classList.add("revealText"); 
  }

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="revealTextWrapper">
    <p id="revealUpperText">Bra jobbat, du har nu listat ut vem som MAU Gossip är men kommer sista frågan...</p>
    <p id="revealMiddleText">Ska du avslöja MAU Gossip? Häng ut Lovisa och visa alla vem som ligger bakom kontot. Genom att avslöja sanningen rentvår du ditt eget namn och köper dig en plats i värmen hos Maja och Leon. Praktikplatsen är säkrad, men till vilket pris?</p>
    <p id="revealLastText">...eller ska du radera hemsidan? Stoppa kedjan av hat en gång för alla. Om du raderar allt försvinner bevisen mot dig, men också chansen att hämnas. Du väljer moralen före karriären, men kommer ryktena om dig att leva kvar i korridorerna?</p>
  </div>
  <button id="nextButtonReveal">Nästa</button>`;

  const nextButtonReveal = document.getElementById("nextButtonReveal")

  nextButtonReveal.addEventListener("click", function (){
    revealPopup()
  })
}

function revealPopup(){
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");

  if (headerLogoMobil) {
    headerLogoMobil.style.display = "none";
  }

  if (headerDivLogo) {
    headerDivLogo.innerHTML = "Reveal";
    headerDivLogo.classList.add("revealPopupText"); 
  }

  main.innerHTML= ``;
  main.innerHTML = `
  <div id="revealPopupWrapper">
  <div id="wrapperReveal">
  <div id="upperRevealPopup">
    <p id="breadTextRevealPopup">Självklart är det ingen enkel fråga att ställa, vad väljer du? Det finns naturligtvis ett svar som är det rätta, men frågan är om du har karaktären nog att hitta det. Det finns en viss moralisk estetik i det här spelet, och ingen skulle klandra dig om du frestades att välja något annat. </p>
    <p id="questionRevealPopup">Kan du svara rätt, eller kommer du bara vara ännu en i mängden som gissade fel?</p>
  </div>
  <div id="downRevealPopup">
  <div class="popupBox" id="whitepopup">
    <p class="textpopup">Avslöja MAU Gossip</p>
    <p class="PopupTextReveal">Häng ut Lovisa och visa alla vem som ligger bakom kontot. Genom att avslöja sanningen rentvår du ditt eget namn. Praktikplatsen är säkrad, men till vilket pris?</p>
  </div>
  <div class="popupBox" id="redpopup">
    <p class="textpopup">Radera MAU Gossip</p>
    <p class="PopupTextReveal">Om du raderar allt försvinner bevisen mot dig, men också chansen att hämnas. Du väljer moralen före karriären, men kommer ryktena om dig att leva kvar i korridorerna?</p>
    </div>
  </div>
  </div>
  </div>`;

 const whiteButton = document.getElementById("whitepopup");
 const redButton = document.getElementById("redpopup");

 whiteButton.addEventListener("click", function (){
  gameOver()
 })

 redButton.addEventListener("click", function (){
  win()
 })
}

function win(){
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");

  if (headerLogoMobil) {
    headerLogoMobil.style.display = "none";
  }

  if (headerDivLogo) {
    headerDivLogo.innerHTML = "You won";
    headerDivLogo.classList.add("youWonText"); 
  }

  main.innerHTML = ``;
  main.innerHTML= `
  <div id="winWrapper">
  <h1 id="youWonTitle">You Won</h1>
    <p class="upperWin">Där satt den, Alice.

Vem hade kunnat tro att det var Lovisa som drog i alla trådar? Under den perfekta ytan av fastighetsdrömmar och dyra drinkar dolde sig en redaktör med en minst sagt smutsig agenda. Men medan hon hoppades på att se dig falla, visade du något som är sällsyntare än en ledig takvåning i Västra Hamnen: Ryggrad.

Du hade lösenordet i din hand. Du hade makten. Du visste att genom att radera bloggen så raderade du också din chans till den där glittriga praktikplatsen. Men du valde sanningen framför status, och moral framför makt.

Kanske förlorade du jobbet, men du vann något mycket större – din frihet. Lovisas imperium av lögner ligger nu i papperskorgen, och tystnaden som sprider sig över Malmö Universitet är faktiskt ganska... öronbedövande.

Så, vad händer nu? Utan en blogg att gömma sig bakom tvingas alla se sig själva i spegeln. Och du? Du kan gå med högt huvud genom Niagara, för vi vet alla vem som egentligen äger den här stan nu.

Hatten av för en sann vinnare. Men kom ihåg... även om bloggen är borta, finns det alltid någon som ser på.</p>
<div id="xoxoWrapper">
  <p class="downWin">You know you love me.
  XOXO,
  Gossip Girl</p>
</div>
</div>
<button id="deleteBlogButton">Delete</button>
  `;

  const deleteBlogButton = document.getElementById("deleteBlogButton");

  deleteBlogButton.addEventListener("click", function (){
    deleteWholePage()
  })
}

function deleteWholePage(){
  document.body.style.display = "none";
}
