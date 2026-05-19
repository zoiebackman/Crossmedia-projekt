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
            <p id="breadTextRevealPopup">
              Självklart är det ingen enkel fråga att ställa, vad väljer du? Det
              finns naturligtvis ett svar som är det rätta, men frågan är om du
              har karaktären nog att hitta det. Det finns en viss moralisk
              estetik i det här spelet, och ingen skulle klandra dig om du
              frestades att välja något annat.
            </p>
            <p id="questionRevealPopup">
              Kan du svara rätt, eller kommer du bara vara ännu en i mängden som
              gissade fel?
            </p>
          </div>
          <div id="downRevealPopup">
            <div class="popupBox" id="whitepopup">
              <p class="textpopup">Avslöja MAU Gossip</p>
              <p class="PopupTextReveal">
                Häng ut Lovisa och visa alla vem som ligger bakom kontot. Genom
                att avslöja sanningen rentvår du ditt eget namn. Praktikplatsen
                är säkrad, men till vilket pris?
              </p>
            </div>
            <div class="popupBox" id="redpopup">
              <p class="textpopup">Radera MAU Gossip</p>
              <p class="PopupTextReveal">
                Om du raderar allt försvinner bevisen mot dig, men också chansen
                att hämnas. Du väljer moralen före karriären, men kommer ryktena
                om dig att leva kvar i korridorerna?
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
    win();
  });
}

function win() {
  const headerLogoMobil = document.getElementById("headerLoggaMobil");
  const headerDivLogo = document.getElementById("headerDivLogo");
  headerDivLogo.innerHTML = "Vad hände sen?";
  /*   headerDivLogo.id = "gameOverTextId"; */
  headerDivLogo.style.width = "465px";

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="winWrapper">
        <h1 id="youWonTitle">You Won</h1>
        <p class="upperWin">
          När Alice kom in på hemsidan såg hon alla rykten som länge hade
          förstört hennes namn. Hon visste att sidan hade skadat henne och gjort
          att andra fått fel bild av vem hon var. Därför bestämde hon sig för
          att göra något åt saken. Med ett sista klick raderade Alice Mau Gossip
          för alltid. Alla viskningar, hemligheter och elaka kommentarer
          försvann från sidan. Efteråt gick Alice till Lovisa, som hade skapat
          hemsidan. Hon berättade lugnt att Mau Gossip nu var borta. Lovisa blev
          först chockad, men började sedan förstå hur mycket sidan faktiskt hade
          påverkat Alice. Det fick Lovisa att tänka om. Hon insåg att hon
          behövde ta ansvar för det hon hade gjort. Därför hjälpte hon Alice att
          rentvå sitt rykte och berättade sanningen för de andra. Till slut
          började folk se Alice för den hon verkligen var, inte för ryktena som
          spridits. När sanningen kom fram fick Alice äntligen sin praktikplats.
        </p>
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
    <p id ="firstGameover-text">Det verkar som om mysteriet var lite för sofistikerat för vissa. Att avslöja Lovisa kanske kändes rätt för dig, men kvar finns bloggen – som fortfarande påverkar flera människors liv på djupet.

För vissa blev konsekvenserna förödande. Alice lyckades aldrig få den där praktikplatsen på mäklarbyrån, och hon fick inte ens en fot in i branschen. Efter alla rykten om droger valde dessutom hennes egen familj att säga upp kontakten med henne.

Alice arbetar idag på ett kafé och bor som inneboende med en bekant... Hon kämpar dagligen för att få ekonomin att gå ihop och få det att gå runt. Men mitt i allt det svåra hittade hon och Calle varandra. Calle blev djupt kär i Alice, och idag är de partners och bor tillsammans. De delar tillvaron och kämpar på, sida vid sida, med sin strama ekonomi.

För Lovisa ändrades däremot ingenting. Hon visade sig vara listig och har idag lyckats knipa ett jobb på en av de främsta mäklarbyråerna.

För Leon och Maja gick det tyvärr inte lika bra. Det turbulenta efterspelet slet på dem, och deras relation tog slut. Idag arbetar de på olika företag och fokuserar helt på sina karriärer för att försöka jobba sig uppåt.</p>
  </div>
    
  `;
}
