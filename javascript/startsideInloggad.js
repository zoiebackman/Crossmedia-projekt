let main = document.querySelector("main");
logIn();

function logIn() {
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
      momentOfTruth();
      loggedInPage();
    } else {
      alert("Fel användarnamn eller lösenord. Försök igen!");
      passwordInput.value = "";
      usernameInput.value = "";
    }
  });
}

function momentOfTruth() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Sanningens ögonblick"
  headerDivLogo.classList.add("momentOfTruthText");
}

function loggedInPage() {
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
  <button id="nextButtonMoment">Nästa</button>`;

  const nextButtonMoment = document.getElementById("nextButtonMoment");
  const momentInput = document.getElementById("inputMomentAnswer");
  const notCorrectPassword = document.getElementById("notCorrectPassword");

  notCorrectPassword.style.display = "none";

  let attempts = 0;

  nextButtonMoment.addEventListener("click", function (event) {
    const password = momentInput.value.toLowerCase();
    const correctPassword = "lovisa";

    if (password === correctPassword) {
      reveal();
    } else {
      attempts++;
    }

    if (attempts === 1) {
      notCorrectPassword.style.display = "block";
      notCorrectPassword.textContent =
        "Du har en chans till att skriva rätt, annars är det Game Over";
      momentInput.value = "";
      momentInput.focus();
    } else if (attempts >= 2) {
      main.innerHTML = ``;
      gameOver();
    }
  });
}

function gameOver() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Game Over";
  headerDivLogo.id = "gameOverTextId";

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="gameOverContainer">
    <div id="gameOverWrapper"></div>
    <h1 id="GameOverTitle">Game Over</h1>
    <p id ="firstGameover-text">Det verkar som om mysteriet var lite för sofistikerat för vissa. Mau Gossip har spelat spelet fläckfritt – det kan vi alla konstatera med en gnutta avundsjuka. Dessvärre (ett ord som låter betydligt lyxigare än ett simpelt tyvärr) räckte din intuition inte hela vägen fram den här gången. Gåtan förblir olöst i dina händer, och vi som verkligen hade hoppats på att du skulle briljera på podiet. Men i den här världen får man inga poäng för att bara försöka. Bättre lycka nästa gång. Om det ens finns en nästa gång...</p>
    <p id ="secondGameover-text">You know you love me. </p>
    <p id="thirdGameover-text">XOXO</p>
  </div>
    
  `;
}

function reveal() {
 
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Reveal";
  headerDivLogo.classList.add("revealText");

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="revealTextWrapper">
    <p id="revealUpperText">Bra jobbat, du har nu listat ut vem som MAU Gossip är men kommer sista frågan...</p>
    <p id="revealMiddleText">Ska du avslöja MAU Gossip? Häng ut Lovisa och visa alla vem som ligger bakom kontot. Genom att avslöja sanningen rentvår du ditt eget namn och köper dig en plats i värmen hos Maja och Leon. Praktikplatsen är säkrad, men till vilket pris?</p>
    <p id="revealLastText">...eller ska du radera hemsidan? Stoppa kedjan av hat en gång för alla. Om du raderar allt försvinner bevisen mot dig, men också chansen att hämnas. Du väljer moralen före karriären, men kommer ryktena om dig att leva kvar i korridorerna?</p>
  </div>
  <button id="nextButtonReveal">Nästa</button>`;

  const nextButtonReveal = document.getElementById("nextButtonReveal");

  nextButtonReveal.addEventListener("click", function () {
    revealPopup();
  });
}

function revealPopup() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Reveal";
  headerDivLogo.classList.add("revealPopupText");

  main.innerHTML = ``;
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

  whiteButton.addEventListener("click", function () {
    gameOver();
  });

  redButton.addEventListener("click", function () {
    win();
  });
}

function win() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "You Won";
  headerDivLogo.classList.add("youWonText");

  main.innerHTML = ``;
  main.innerHTML = `
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

  deleteBlogButton.addEventListener("click", function () {
    deleteWholePage();
  });
}

function deleteWholePage() {
  document.body.style.display = "none";
}
