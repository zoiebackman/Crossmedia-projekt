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
let currentPage;
// let currentWhisperCounterIndex = 0;

const pictures = [
  "../pictures/picturesPage/1.png",
  "../pictures/picturesPage/2.png",
  "../pictures/picturesPage/3.png",
  "../pictures/picturesPage/4.png",
  "../pictures/picturesPage/5.png",
  "../pictures/picturesPage/6.png",
  "../pictures/picturesPage/7.png",
  "../pictures/picturesPage/8.png",
  "../pictures/picturesPage/9.png",
  "../pictures/picturesPage/10.png",
  "../pictures/picturesPage/26.jpg",
  "../pictures/picturesPage/11.png",
  "../pictures/picturesPage/12.png",
  "../pictures/picturesPage/13.png",
  "../pictures/picturesPage/14.png",
  "../pictures/picturesPage/15.png",
  "../pictures/picturesPage/16.png",
  "../pictures/picturesPage/17.png",
  "../pictures/picturesPage/18.png",
  "../pictures/picturesPage/19.png",
  "../pictures/picturesPage/20.png",
  "../pictures/picturesPage/28.jpg",
  "../pictures/picturesPage/21.png",
  "../pictures/picturesPage/shifferKodBILD.jpeg",
  "../pictures/picturesPage/22.png",
  "../pictures/picturesPage/24.png",
  "../pictures/picturesPage/24.jpg",
  "../pictures/picturesPage/25.png",
  "../pictures/picturesPage/26.png",
  "../pictures/picturesPage/27.png",
  "../pictures/picturesPage/28.png",
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
  main.innerHTML = ``;
  main.innerHTML = `
   <div id="welcomeContainer">
   <div id="welcomeWrapper">
        <h1 id="WelcomeText">Välkommen till spelet</h1>
        <p id="introText">Femte terminen har precis börjat på Malmö universitet, men istället för att fokusera på fastighetsrätt och dina studier har du vaknat upp till din värsta mardröm. Baksmällan från gårdagens fest på Niagaras takvåning är ingenting jämfört med den ångest som sköljer över dig när du ser dig själv i MAU Gossips senaste inlägg. Vad kommer hända med din karriär när din blivande chef får syn på blogginlägget där du har snortat kokain på takterrassen? <br><br>
        Du är nu indragen i ett nät av lögner och hemligheter som styrs av Malmös absoluta elit. Ditt rykte och din framtida karriär står på spel.

        </p>

        <div id="welcomeSection1">
            <h2 id="howToPlay">Din roll i spelet: </h2>
            <p id="welcomeInstructions">Du heter Alice, är 24 år gammal och går på fastighetsförmedlingsprogrammet på Malmö universitet.
              Du valde utbildningen för att skapa en stabil framtid. Du tar dina studier på allvar, jobbar extra vid sidan av och hoppas på att få en riktigt bra praktikplats efter terminen.
            </p>
            <p class="welcomeTextInfo">Till skillnad från många andra i din klass kommer du inte från pengar, kontakter eller en självklar plats i det sociala spelet.
              Du håller dig mest för dig själv.
              Observerar mer än du pratar.<br><br>

              Och det har alltid fungerat.<br>
              Fram tills nu.. <br><br>

              Du kommer att få tillgång till din (Alice) instagram:</p>

            <p class="instagramPasswordAlice"><strong>Användarnamn: alicemagdalenabjorklund <br>Lösenord: Hej123456</strong> </p>
        </div>

        <div id="welcomeSection2">
          <h2 id="howToPlay">Malmö Universitets Elit</h2>
          <p id="welcomeInstructions">På utbildningen finns en grupp som alla känner till.  
            De kallas, halvt på skämt och halvt på allvar, för - <strong>“Malmö Universitets Elit"</strong>.
            De styr inte bara stämningen i klassen, de styr vad folk tycker, vem som passar in och vem som inte gör det.
          </p>

            <ul>
              <li><strong>Maja</strong> - 23 år gammal och går mäklar-linjen på Malmö universitet och den populära tjejen inom programmet. Alla på universitetet vet vem hon är och dessutom dotter till VD:n av Mercedes Benz Malmö där pengar aldrig har varit ett problem. .</li>
              <li><strong>Lovisa</strong> - 23 år gammal och är en populär tjej, men inte lika populär som sin bästa vän Maja. Hon går mäklar-linjen på Malmö universitet och även hon, dotter till rika föräldrar. </li>
              <li><strong>Leon</strong> -  24 år gammal och är den charmiga och självsäkra killen i klassen som älskar uppmärksamhet, även om det är från andra tjejer än sin flickvän Maja. Leon går också på mäklar-linjen och är son till styrelseordförande på Ikano Bank.</li>
              <li><strong>Calle</strong> - 23 år gammal och går tillsammans med de andra i eliten från mäklarprogrammet på Malmö universitet. Han är bästa vän med Leon och älskar att festa.</li>
            </ul>

            <p id="welcomeInstructions">Utåt sett är de perfekta. Men alla har något att dölja. 
              Och någon… vet vad de döljer…
            </p>
            </div>

            <div id="welcomeSection3">
          <h2 id="howToPlay">Där spelet börjar</h2>
           <p id="welcomeInstructions">En ny sida har dykt upp:
            <strong>MAU Gossip</strong> <br><br> En anonym blogg där någon publicerar rykten om studenter på universitetet.
              Du vet en sak:
              Om du inte tar reda på sanningen kommer någon annan att skriva den åt dig.
            </p>
            </div>
            <div id="welcomeSection4">
            <h2 id="howToPlay">Regler / Rekommendationer </h2>
            <p id="welcomeInstructions">Det här är en berättelse som utspelar sig på flera plattformar.
              Två av dem kommer vara viktigast för dig:
            </p>

            <ul>
            <li><strong>Instagram</strong> - där du lär känna karaktärerna, deras relationer och hur de vill framstå</li>
            <li><strong>MAU Gossip</strong> - där rykten, hemligheter och anonyma tips publiceras</li>
            </ul>

            <p id="welcomeInstructions">Men sanningen finns aldrig bara på ett ställe.
              För att förstå vad som faktiskt har hänt behöver du också vara uppmärksam på annat:
            </p>
            
            <ul>
              <li>Bilder från festen</li>
              <li>Kommentarer och gamla inlägg</li>
              <li>Privata meddelanden</li>
              <li>Lösenord och användarnamn du hittar</li>
              <li>Små detaljer som inte verkar viktiga vid första anblick</li>
            </ul>

            <p id="welcomeInstructions">Ta inte med någon av ledtrådarna från platsen. Låt dem ligga kvar där du hittade dem så att nästa person också kan genomföra spelet. Om du vill får du gärna fotografera dem istället. <br><br>
              Ibland säger det som saknas mer än det som syns… 
            </p>
               <p id="welcomeInstructions"><strong>XOXO… </strong></p>
            </div>
          <h3 id="universityTitle">Fastighetsförmedling ME2024</h3>
        <div id="imgContainer"></div>
        <button id="startButton">Start</button>
        </div>
    </div>
  `;

  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", function () {
    homePage();
  });
}

//rensa main och visa Alla viskningar
function goToWhisperPage() {
  document.body.classList.remove("homePage"); //ifall den fuckas i mobilvy med att den hoppar upp!!
  currentPage = 1;

  headerDivLoggo.innerHTML = `Alla viskningar`;
  headerDivLoggo.style.backgroundImage = "none";
  headerDivLoggo.classList.add("headerText");
  headerDivLoggo.style.width = "auto";

  let whisperArrayOnPageLocal =
    JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];
  let currentWhisperCounterIndex = whisperArrayOnPageLocal.length;
  console.log(whisperArrayOnPageLocal);

  let correctPasswordArrayLocal =
    JSON.parse(localStorage.getItem("correctPasswordArrayLocal")) || [];

  main.innerHTML = `
  <p id= "mobileOnly">Alla Viskningar</p>
  <div id="containerGossip">
  <div class = "boxGossip"> 
    <div class = "titleBox"> 
   <p class="dateText"> ${getTodaysDate()}</p>
   <p class="dateText"> Viskning ${whisperArray[0].id} </p>
   </div>
             ${currentWhisperCounterIndex == 0 ? ` <p class = "textGossip"> ${whisperArray[0].text}</p> alt="" />` : ""}
   <p class="xoxoText"> XOXO</p>
  </div>
  </div>
  <div id=containerDown> 
  <div id="containerPages">
    <p class="textPages" id="previousPage">Föregående sida</p>
    <p class="textPages" id="pageNum">${currentPage}</p>
    <p class="textPages" id="nextPage">Nästa sida</p>
    </div>
    <img id="imgLock" src="../pictures/lockpic.png"
  </div>
  `;

  if (currentWhisperCounterIndex == 0) {
    pushToArray(whisperArray[currentWhisperCounterIndex]);
    currentWhisperCounterIndex++;
  }
  console.log(whisperArrayOnPageLocal.length);
  renderPage(currentPage);
  console.log(whisperArrayOnPageLocal.length);

  let containerGossip = document.getElementById("containerGossip");
  containerGossip.style.display = "flex";
  let previousPage = document.getElementById("previousPage");
  let nextPage = document.getElementById("nextPage");
  let pageNum = document.getElementById("pageNum");
  let whisperLock = document.getElementById("imgLock");
  let containerDown = document.getElementById("containerDown");

  whisperLock.addEventListener("click", () => {
    let lockDiv = document.getElementById("lockDiv");

    // Om div-en INTE finns i HTML-dokumentet, skapa den nu
    if (!lockDiv) {
      showLockDiv();
    } else {
      // Om den redan finns, bara växla (toggle) klassen
      lockDiv.classList.toggle("hidden");
    }
  });

  function showLockDiv() {
    let lockDiv = document.createElement("div");
    lockDiv.id = "lockDiv";

    lockDiv.innerHTML = `
    <p id="lockText">Lås upp nästa viskning..</p>
    <input id="passwordInput" type="text" placeholder="Lösenord..." />
    <div id="groupLock"> 
      <button id="unlockButton">Lås upp</button>
      <p id="lockMessage"></p>
    </div>
  `;
    containerDown.appendChild(lockDiv);

    let passwordInput = document.getElementById("passwordInput");
    let unlockButton = document.getElementById("unlockButton");
    let errorMessage = document.getElementById("lockMessage");

    unlockButton.addEventListener("click", () => {
      let currentCorrectPassword =
        whisperArray[currentWhisperCounterIndex].password;

      if (passwordInput.value != currentCorrectPassword) {
        errorMessage.textContent = "Fel kod tyvärr, fortsätt leta.";
      } else {
        errorMessage.textContent = "";
        lockDiv.classList.toggle("hidden");

        if (whisperArray[currentWhisperCounterIndex].password === "CBCB") {
          unlockGalleryPicture("../pictures/picturesPage/23.jpg");
        }

        if (whisperArray[currentWhisperCounterIndex].id == 2) {
          pushToArray(whisperArray[currentWhisperCounterIndex]);
          currentWhisperCounterIndex++;

          renderPage(currentPage);

          pushToArray(whisperArray[currentWhisperCounterIndex]);
          currentWhisperCounterIndex++;
        } else {
          pushToArray(whisperArray[currentWhisperCounterIndex]);
          currentWhisperCounterIndex++;
        }

        renderPage(currentPage);
      }
    });
  }
}

document.addEventListener("click", (event) => {
  if (event.target.id === "nextPage") {
    let whisperArrayOnPageLocal =
      JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];
    let maxPage = Math.ceil(whisperArrayOnPageLocal.length / 3);

    if (currentPage < maxPage) {
      currentPage++;
      renderPage(currentPage);
      document.getElementById("pageNum").textContent = currentPage;
    }
  }

  if (event.target.id === "previousPage") {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
      document.getElementById("pageNum").textContent = currentPage;
    }
  }
});

function getTodaysDate() {
  let today = new Date();
  let todaysDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return todaysDate;
}

function pushToArray(whisper) {
  let whisperArrayOnPageLocal =
    JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];

  whisperArrayOnPageLocal.push({
    id: whisper.id,
    date: whisper.date,
    text: whisper.text,
    picUrl: whisper.picUrl || null,
    password: whisper.password,
  });

  localStorage.setItem(
    "whisperArrayOnPageLocal",
    JSON.stringify(whisperArrayOnPageLocal),
  );
  renderPage(currentPage);

  console.log(whisperArrayOnPageLocal.length);
}

function renderPage(currentPage) {
  let containerGossip = document.getElementById("containerGossip");
  containerGossip.innerHTML = "";

  let whisperArrayOnPageLocal =
    JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];
  let reversed = [...whisperArrayOnPageLocal].reverse();

  let start = (currentPage - 1) * 3;
  let end = start + 3;
  let postsToShow = reversed.slice(start, end);

  postsToShow.reverse().forEach((post) => {
    // console.log(post)
    let boxGossipDiv = document.createElement("div");
    boxGossipDiv.classList.add("boxGossip");
    console.log(post);
    boxGossipDiv.innerHTML = `
    <div class = "titleBox"> 
       <p class="dateText"> Viskning ${post.id} </p>
      <p class="dateText">${post.date}</p>
      </div>
      <p class="textGossip">${post.text}</p>
       ${post.picUrl ? `<img id="imgGossip" src="${post.picUrl}" alt="" />` : ""}
  <p class="xoxoText">XOXO</p>
    `;
    console.log(post.picUrl);
    containerGossip.prepend(boxGossipDiv);
  });
}

function unlockGalleryPicture(picUrl) {
  let unlockedGalleryPictures =
    JSON.parse(localStorage.getItem("unlockedGalleryPictures")) || [];

  if (!unlockedGalleryPictures.includes(picUrl)) {
    unlockedGalleryPictures.push(picUrl);
  }

  localStorage.setItem(
    "unlockedGalleryPictures",
    JSON.stringify(unlockedGalleryPictures),
  );
}

function picturesPage() {
  document.body.classList.remove("homePage");
  headerDivLoggo.innerHTML = `Bild galleri`;
  headerDivLogo.classList.add("headerText");
  headerDivLoggo.style.width = "500px";
  footer.style.display = "block";

  main.innerHTML = `
    <div id="picturePageBox">
      <div id="picturesPageTitlePhone">
        <p>Bildgalleri</p>
      </div>
      <div id="picturesGalleryBox"></div>
    </div>
  `;

  let picturesBox = document.getElementById("picturesGalleryBox");

  let imagePopup = document.createElement("div");
  imagePopup.id = "imagePopup";

  let popupImage = document.createElement("div");
  popupImage.id = "popupImage";

  imagePopup.append(popupImage);
  document.body.append(imagePopup);

  let unlockedGalleryPictures =
    JSON.parse(localStorage.getItem("unlockedGalleryPictures")) || [];

  let allPictures = [...pictures, ...unlockedGalleryPictures];

  for (let pic of allPictures) {
    let div = document.createElement("div");
    div.classList.add("pictureGallery");
    div.style.backgroundImage = `url(${pic})`;

    div.addEventListener("click", () => {
      popupImage.style.backgroundImage = `url(${pic})`;
      imagePopup.classList.add("showPopup");

      if (pic === "../pictures/picturesPage/23.jpg") {
        let textBox = document.createElement("div");
        textBox.id = "popupImageTextBox";
        popupImage.append(textBox);
      }

      if (pic === "../pictures/picturesPage/shifferKodBILD.jpeg") {
        popupImage.style.backgroundImage = `url("../pictures/picturesPage/shifferkod1.png")`;
      }
    });

    picturesBox.append(div);
  }

  imagePopup.addEventListener("click", () => {
    imagePopup.classList.remove("showPopup");
    popupImage.innerHTML = "";
  });
}

function sendTipsPage() {
  headerDivLoggo.innerHTML = ``;
  headerDivLoggo.innerHTML = `
    Skicka in ett tips
`;
  headerDivLogo.classList.add("headerText");
  headerDivLoggo.style.width = "580px";
  footer.style.display = "block";

  main.innerHTML = ``;
  main.innerHTML = `
  <div id="sendTipsPageBox">
    <div id="sendTipsBox">
      <p id="sendTipsTitle">Skicka in ett tips</p>
      <p id="sendTipsInfo">XOXO… hemligheter stannar aldrig dolda för länge. Sett något? Hört något? Vet du mer än du borde? Lämna ditt tips anonymt. Diskret. Utan spår. I den här världen är information allt.</p>

      <div id="sendTipsForm">
          <div>
              <p>Skriv ditt tips</p>
          </div>    

          <textarea id="tipsText"></textarea>

          <button id="sendTipsButton">Skicka</button>
      </div>
    </div>
  </div>
  `;

  let button = document.getElementById("sendTipsButton");
  let textFromUser = document.getElementById("tipsText");
  button.addEventListener("click", () => {
    if (textFromUser.value == "") {
      alert("Du måste skriva något");
    } else {
      textFromUser.value = "";
      alert("Tack för ditt tips!");
    }
  });
}

homePage();

homeNav.addEventListener("click", () => {
  homePage();
});

hamburgerMenu.addEventListener("click", () => {
  let oldMenu = document.getElementById("menuBox");

  if (oldMenu) {
    oldMenu.remove();
    footer.style.display = "block";
    menuIsOpen = false;

    if (wasHomePageBeforeMenu) {
      document.body.classList.add("homePage");
    }

    return;
  }

  wasHomePageBeforeMenu = document.body.classList.contains("homePage");
  document.body.classList.remove("homePage");

  footer.style.display = "none";
  menuIsOpen = true;

  let menuBox = document.createElement("div");
  menuBox.id = "menuBox";

  menuBox.innerHTML = `
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
  `;

  document.body.append(menuBox);

  let welcomeButton = document.getElementById("hamburgerMenuWelcomeButton");
  let homeButton = document.getElementById("hamburgerMenuHomeButton");
  let whispersButton = document.getElementById("hamburgerMenuWhispersButton");
  let picturesButton = document.getElementById("hamburgerMenuPicturesButton");
  let sendTipsButton = document.getElementById("hamburgerMenuSendTipsButton");

  welcomeButton.addEventListener("click", () => {
    menuBox.remove();
    footer.style.display = "block";
    welcomeFun();
  });
  homeButton.addEventListener("click", () => {
    menuBox.remove();
    footer.style.display = "block";
    homePage();
  });
  whispersButton.addEventListener("click", () => {
    menuBox.remove();
    footer.style.display = "block";
    goToWhisperPage();
  });
  picturesButton.addEventListener("click", () => {
    menuBox.remove();
    footer.style.display = "block";
    picturesPage();
  });
  sendTipsButton.addEventListener("click", () => {
    menuBox.remove();
    footer.style.display = "block";
    sendTipsPage();
  });
});

//loopa ingenom
linksNav.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (event.target.id == "whispers") {
      goToWhisperPage();
    } else if (event.target.id == "welcome") {
      welcomeFun();
      console.log("gå till welcome ");
    } else if (event.target.id == "pictures") {
      picturesPage();
    } else if (event.target.id == "sendTips") {
      sendTipsPage();
    } else if (event.target.id == "welcome") {
      welcomeFun();
    }
  });
});
