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
  "../pictures/picturesPage/23.jpg",
  "../pictures/picturesPage/14.png",
  "../pictures/picturesPage/15.png",
  "../pictures/picturesPage/16.png",
  "../pictures/picturesPage/17.png",
  "../pictures/picturesPage/18.png",
  "../pictures/picturesPage/19.png",
  "../pictures/picturesPage/20.png",
  "../pictures/picturesPage/28.jpg",
  "../pictures/picturesPage/21.png",
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

  startButton.addEventListener("click", function () {
    homePage();
  });
}
//rensa main och visa Alla viskningar
function goToWhisperPage() {
  let totalWhisperPosts;
  // document.body.classList.remove("homePage"); /////?????

  headerDivLogo.innerHTML = `Alla viskningar`;
  headerDivLogo.style.backgroundImage = "none";
  headerDivLogo.classList.add("headerText");
  headerDivLogo.style.width = "auto";

  main.innerHTML = `

  <p id= "mobileOnly">Alla Viskningar</p>
  <div id="countdownDiv"></div>
  <div id="containerGossip">

      
  </div>
  <div id="containerPages">
  <p id= "klicka">KLICKAA</p>
    <p class="textPages" id="previousPage">Föregående sida</p>
    <p class="textPages" id="pageNum">${currentPage}</p>
    <p class="textPages" id="nextPage">Nästa sida</p>
  </div>
  `;

  let containerGossip = document.getElementById("containerGossip");
  containerGossip.style.display = "flex";
  let previousPage = document.getElementById("previousPage");
  let nextPage = document.getElementById("nextPage");
  let pageNum = document.getElementById("pageNum");

  let whisperArrayOnPageLocal =
    JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];
  let currentWhisperCounterIndex = whisperArrayOnPageLocal.length;

  //hämtar localStorage när man kommer tillbaka till sidan.
  renderPage(currentPage);

  let klicka = document.getElementById("klicka");

  klicka.addEventListener("click", () => {
    // if (currentWhisperCounterIndex < whisperArray.length) {
    //   pushToArray(whisperArray[currentWhisperCounterIndex])
    //   currentWhisperCounterIndex++;

    if (interval) clearInterval(intervalId);

    let countdownDiv = document.getElementById("countdownDiv");
    countdownDiv.innerHTML += `
    <p> <span id ="timeMin"> 10 </span> : <span id ="timeSec"> 00 </span>  </p> 
    `;
    countdownDiv.style.position = "absolute";

    let intervalId;
    let timeWhenStart = 600; //10 min

    intervalId = setInterval(() => {
      timeWhenStart--;
      console.log("Timer körs");
      console.log(timeWhenStart);
      changeTime(timeWhenStart);

      if (timeWhenStart % 10 === 0) {
        if (currentWhisperCounterIndex < whisperArray.length) {
          pushToArray(whisperArray[currentWhisperCounterIndex]);
          currentWhisperCounterIndex++;
        }
      }
    }, 1000);
  });

  function changeTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let timeMin = document.getElementById("timeMin");
    let timeSec = document.getElementById("timeSec");
    let countdownDiv = document.getElementById("countdownDiv");
    timeMin.textContent = minutes;
    timeSec.textContent = seconds.toString().padStart(2, "0");
  }

  nextPage.addEventListener("click", () => {
    let maxPage = Math.ceil(whisperArrayOnPageLocal.length / 3);

    if (currentPage < maxPage) {
      currentPage++;
      renderPage(currentPage);
      pageNum.textContent = currentPage;
    }
  });

  previousPage.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
      pageNum.textContent = currentPage;
    }
  });
}

function getTodaysDate() {
  let today = new Date();
  let todaysDate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return todaysDate;
}

let whisperArrayOnPageLocal =
  JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];
let currentPage = 1;

function pushToArray(whisperArray) {
  console.log(whisperArray);
  whisperArrayOnPageLocal.push({
    date: whisperArray.date,
    text: whisperArray.text,
  });
  localStorage.setItem(
    "whisperArrayOnPageLocal",
    JSON.stringify(whisperArrayOnPageLocal),
  );
  renderPage(currentPage);
}

function renderPage(currentPage) {
  let containerGossip = document.getElementById("containerGossip");
  containerGossip.innerHTML = "";

  let whisperArrayOnPageLocal =
    JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];

  if (whisperArrayOnPageLocal.length === 0) {
    containerGossip.innerHTML = `
      <div class="boxGossip noGossipPost textGossip">
        Ingen viskning än så länge..
      </div>`;
    return;
  }

  //kolla ifall inga viskningar finns, isåfall ta bort
  let noGossipPostDiv = document.querySelector(".noGossipPost");
  if (noGossipPostDiv) {
    noGossipPostDiv.style.display = "none";
  }

  let allPosts =
    JSON.parse(localStorage.getItem("whisperArrayOnPageLocal")) || [];
  let reversed = [...allPosts].reverse();

  let start = (currentPage - 1) * 3;
  let end = start + 3;
  let postsToShow = reversed.slice(start, end);

  postsToShow.reverse().forEach((post) => {
    // console.log(post)
    let boxGossipDiv = document.createElement("div");
    boxGossipDiv.classList.add("boxGossip");

    boxGossipDiv.innerHTML = `
      <p class="dateText">${post.date}</p>
      <p class="textGossip">${post.text}</p>
      <p class="xoxoText">XOXO</p>
    `;
    containerGossip.prepend(boxGossipDiv);
  });
}

function picturesPage() {
  document.body.classList.remove("homePage");
  headerDivLoggo.innerHTML = `Bild galleri`;
  headerDivLogo.classList.add("headerText");
  headerDivLoggo.style.width = "500px";
  footer.style.display = "block";
  main.innerHTML = ``;
  main.innerHTML = `
    <div id="picturePageBox">
        <div id="picturesPageTitlePhone">
            <p>Bildgalleri</p>
        </div>
        <div id="picturesGalleryBox"></div>
    </div>
  `;

  let textBox = document.createElement("div");
  textBox.id = "";
  let picturesBox = document.getElementById("picturesGalleryBox");

  let imagePopup = document.createElement("div");
  imagePopup.id = "imagePopup";

  let popupImage = document.createElement("div");
  popupImage.id = "popupImage";

  imagePopup.append(popupImage);
  document.body.append(imagePopup);

  for (let pic of pictures) {
    let div = document.createElement("div");
    div.classList.add("pictureGallery");
    div.style.backgroundImage = `url(${pic})`;

    div.addEventListener("click", () => {
      popupImage.style.backgroundImage = `url(${pic})`;
      imagePopup.classList.add("showPopup");
      if (
        popupImage.style.backgroundImage ===
        `url("../pictures/picturesPage/24.jpg")`
      ) {
        console.log("hej");
        textBox.id = "popupImageTextBox";
        textBox.textContent =
          "ledtråd här som handlar om blabla bla bla bla bla bla";
        popupImage.append(textBox);
      }
    });

    picturesBox.append(div);
  }

  imagePopup.addEventListener("click", () => {
    imagePopup.classList.remove("showPopup");
    textBox.textContent = "";
    textBox.id = "";
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
      console.log("gå till welcome ");
    } else if (event.target.id == "pictures") {
      picturesPage();
    } else if (event.target.id == "sendTips") {
      sendTipsPage();
    }
  });
});
