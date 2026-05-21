let main = document.querySelector("main");
logIn();

function logIn() {
  main.innerHTML = ``;
  main.innerHTML = `
  <a id="tillbaka" href="homePage.html">Tillbaka</a>
      <div id="loginContainer">
        <div id="logInPopup">
          <div id="popupLI">
            <div id="logga-left">
              <img id="loggaLoginIn" src="../pictures/logga2.png" />
            </div>
            <div id="login-right">
              <div class="input-class">
                <p id="username">Användarnamn</p>
                <input id="input-username" type="text" />
              </div>
              <div class="input-class">
                <p id="password">Lösenord</p>
                <input id="input-password" type="password" />
                <p id="wrong-password">Fel lösenord. Leta lite till och försök igen.. </p>
              </div>
              <button id="login-knappen">Logga in</button>
            </div>
          </div>
        </div>
      </div>`;

  const loginBtn = document.getElementById("login-knappen");
  const usernameInput = document.getElementById("input-username");
  const passwordInput = document.getElementById("input-password");
  const wrongPasswordP = document.getElementById("wrong-password");

  loginBtn.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    const logInData = {
      username: "mau_gossip",
      password: "cocochanel2024",
    };

    if (logInData.username === username && logInData.password === password) {
      wrongPasswordP.style.display = "none";
      momentOfTruth();
      loggedInPage();
    } else {
      passwordInput.value = "";
      usernameInput.value = "";
      wrongPasswordP.style.display = "block";
      wrongPasswordP.style.color = "red";
    }
  });
}

function momentOfTruth() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Sanningens ögonblick";
  headerDivLogo.classList.add("momentOfTruthText");
  headerDivLogo.style.width = "603px";
}

function loggedInPage() {
  main.innerHTML = ``;
  main.innerHTML = `
  <div id="textWrapperMoment">
        <h2 id="momentH2">Sanningens ögonblick...</h2>
        <p id="momentTextP">
          Nu är frågan på allas läppar: vem är egentligen geniet bakom den här
          bloggen? Jag vet att ni dör av nyfikenhet, men gissningar är inte
          alltid gratis...Låt gissningsleken börja.
        </p>
        <div id="inputRutaMoment">
          <p id="questionMoment">Vem är MAU Gossip?</p>
          <input id="inputMomentAnswer" type="password" />
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
      revealPopup();
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
  headerDivLogo.style.width = "380px";

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="gameOverContainer">
    <div id="gameOverWrapper"></div>
    <h1 id="GameOverTitle">Game over</h1>
    <p id ="firstGameover-text">Det verkar som att du inte lyckas att lösa vem MAU Gossip är. Så synd :)</p>
  </div>
  `;
}

function reveal() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Reveal";
  headerDivLogo.classList.add("revealText");
  headerDivLogo.style.width = "280px";

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="revealTextWrapper">
        <p id="revealUpperText">
          Bra jobbat, du har nu listat ut vem som MAU Gossip är men kommer sista
          frågan...
        </p>
        <p id="revealMiddleText">
          Ska du avslöja MAU Gossip? Häng ut Lovisa och visa alla vem som ligger
          bakom kontot. Genom att avslöja sanningen rentvår du ditt eget namn
          och köper dig en plats i värmen hos Maja och Leon. Praktikplatsen är
          säkrad, men till vilket pris?
        </p>
        <p id="revealLastText">
          ...eller ska du radera hemsidan? Stoppa kedjan av hat en gång för
          alla. Om du raderar allt försvinner bevisen mot dig, men också chansen
          att hämnas. Du väljer moralen före karriären, men kommer ryktena om
          dig att leva kvar i korridorerna?
        </p>
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
            <p id="breadTextRevealPopup">
Bra jobbat. Du har lyckats med det ingen annan klarade – du har avslöjat vem som döljer sig bakom MAU Gossip.

Men allt leder fram till detta ögonblick… den sista frågan.

Vad gör du nu?


            
            </p>
            <p id="questionRevealPopup">
            Ditt val kommer ha betydande påverkan på din framtid...
            </p>
          </div>
          <div id="downRevealPopup">
            <div class="popupBox" id="whitepopup">
              <p class="textpopup">Avslöja MAU Gossip</p>
              <p class="PopupTextReveal">
                Du väljer att avslöja Lovisa.  
              </p>
            </div>
            <div class="popupBox" id="redpopup">
              <p class="textpopup">Ta över MAU Gossip</p>
              <p class="PopupTextReveal">
                Du väljer att ta över Mau Gossips hemsida. 
              </p>
            </div>
          </div>
        </div>
      </div>`;

  const whiteButton = document.getElementById("whitepopup");
  const redButton = document.getElementById("redpopup");

  whiteButton.addEventListener("click", function () {
    LovisaReveal();
  });

  redButton.addEventListener("click", function () {
    takeOverMau();
  });
}

function takeOverMau() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Vad hände sen?";
  /*   headerDivLogo.id = "gameOverTextId"; */
  headerDivLogo.style.width = "465px";

  main.innerHTML = ``;
  main.innerHTML = `
       <div id="winWrapper">
        <h1 id="youWonTitle">Vad hände sen?</h1>
        <p class="upperWin">
          Du fick nog av att Mau Gossip förstörde studenters liv och lyckades
          genom ett smart drag hacka dig in och ta över kontrollen av hemsidan.
          Lovisa, som i hemlighet faktiskt hade skapat sidan, märkte plötsligt
          att hon var utlåst. Men du valde att inte avslöja vem som hade
          startat bloggen, utan hade en helt annan plan för hämnd. Du
          började istället använda sidan till att posta grova rykten och
          känsliga hemligheter om just Lovisa. Inlägg efter inlägg spreds om
          Lovisas privatliv och påstådda snedsteg, precis på samma elaka sätt
          som sidan alltid hade fungerat. Lovisa tvingades nu uppleva exakt
          samma mardröm som hon själv hade utsatt andra för. Ryktena om Lovisa
          spred sig snabbt utanför universitetet och nådde stadens mäklarfirmor.
          När examen kom var Lovisas rykte så förstört av allt skvaller att
          ingen i branschen ville anställa henne. Lovisa hamnade
           i en lokal fiskbutik där hon rensade fisk dag ut och dag in, ett
          jobb hon absolut vantrivdes med, men det enda hon kunde få. Du däremot, Alice, 
          lämnade allt drama bakom dig och flyttade till New York. Med
           stort driv klättrade du dig snabbt till toppen och blev en av
          Manhattans mest framgångsrika mäklare, helt fri från det förflutna.
        </p>
        <div class="lastPictureBox">
          <div id="AliceWithJob"></div>
          <div id="LovisaJobless"></div>
        </div>
      </div>
  `;

  const deleteBlogButton = document.getElementById("deleteBlogButton");

  deleteBlogButton.addEventListener("click", function () {
    deleteWholePage();
  });
}

function deleteWholePage() {
  document.body.style.display = "none";
}

function LovisaReveal() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Vad hände sen?";
  /*   headerDivLogo.id = "gameOverTextId"; */
  headerDivLogo.style.width = "465px";

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="gameOverContainer">
        <div id="gameOverWrapper"></div>
        <h1 id="GameOverTitle">Vad hände sen?</h1>
        <p id="firstGameover-text">
          Du konfronterade Lovisa inför alla och avslöjade att det var hon
          som låg bakom skvallerbloggen Mau Gossip. Men Lovisa spelade skakad,
          och ingen trodde på dig. Rasande över anklagelsen bestämde sig
          Lovisa för att hämnas. Hon spred nya, grova lögner om dig, rykten som snabbt spreds utanför universitetet.
          Eftersom fastighetsbranschen bygger helt på förtroende blev
          konsekvenserna totala. Ingen mäklarfirma ville längre ha dig i företaget. Det spelade
          ingen roll hur mycket du kämpade, ringde runt eller skickade in
          sitt CV; dörrarna var helt stängda och ditt namn, "Alice Björklund", blev svartlistat.
          Månader blev till år. Utan inkomst eller framtidsutsikter tvingades
          du flytta in i sin mammas källare. Det som skulle ha varit starten
          på en framgångsrik karriär förvandlades istället till en monoton
          vardag framför datorskärmen, där du dag ut och dag in fortsatte att
          skicka iväg jobbansökningar som aldrig ledde till någonting. Lovisas
          rykten hade lyckats förstöra dina drömmar och din framtid för gott.
        </p>
        <div class="lastPictureBox">
          <div id="lovisaEngaged"></div>
          <div id="aliceJobless"></div>
        </div>
      </div>
  `;
}
