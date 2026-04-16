import * as FUNC from "../funktioner/functions.js";

async function handler(request) {
  const url = new URL(request.url);

  const headersCORS = new Headers();
  headersCORS.set("Access-Control-Allow-Origin", "*");
  headersCORS.set("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");
  headersCORS.set("Access-Control-Allow-Headers", "Content-Type");
  headersCORS.set("Content-Type", "application/json");

  if (request.method == "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: headersCORS,
    });
  }

  const contentType = request.headers.get("content-type");

  if (
    request.method !== "GET" &&
    request.method !== "OPTIONS" &&
    url.pathname !== "/postPictures" &&
    (!contentType || !contentType.includes("application/json"))
  ) {
    return new Response(
      JSON.stringify({ error: "Request-Body must be JSON!" }),
      { status: 400, headers: headersCORS },
    );
  }

  if (request.method == "GET") {
    if (url.pathname == "/getPublishedTips") {
      let json = await FUNC.getJsonInformation("../json/publishedTips.json");

      return new Response(JSON.stringify(json), {
        status: 200,
        headers: headersCORS,
      });
    }

    if (url.pathname == "/getSentTips") {
      let json = await FUNC.getJsonInformation("../json/sentTips.json");

      return new Response(JSON.stringify(json), {
        status: 200,
        headers: headersCORS,
      });
    }

    if (url.pathname == "/pictures") {
      let json = await FUNC.getJsonInformation("../json/pictures.json");

      return new Response(JSON.stringify(json), {
        status: 200,
        headers: headersCORS,
      });
    }
  }

  if (request.method == "POST") {
    /* inlogg för att logga in som mau gossip */
    if (url.pathname == "/login") {
      let users = await FUNC.getJsonInformation("../json/loginUser.json");

      const userAccount = await request.json();
      let userFound = false;
      let rightUser;

      for (let user of users) {
        if (
          userAccount.username === user.username &&
          userAccount.password === user.password
        ) {
          userFound = true;
          rightUser = user;
          break;
        }
      }

      if (userFound) {
        return new Response(JSON.stringify({ message: "login succesfull" }), {
          status: 200,
          headers: headersCORS,
        });
      } else {
        return new Response(
          JSON.stringify({ error: "Wrong username or password" }),
          {
            status: 400,
            headers: headersCORS,
          },
        );
      }
    }
    /* Uppdatera json fil med bilder, när nya bilder ska publiceras */
    if (url.pathname == "/postPictures") {
      let allPictures = await FUNC.getJsonInformation("../json/pictures.json");

      const formData = await request.formData();
      const image = formData.get("image");
    }

    /* För att kunna skicka in tips, jag tänker att tipsen är ett objekt med {tips: "", insändare: ""} */
    if (url.pathname == "/sendTips") {
      let allTips = await FUNC.getJsonInformation("../json/sentTips.json");
      let newSentTips = await request.json();

      if (newSentTips.tips == "" || newSentTips.sender == "") {
        return new Response(
          JSON.stringify({ error: "Alla fält måste vara ifyllda!" }),
          {
            status: 400,
            headers: headersCORS,
          },
        );
      } else {
        allTips.push(newSentTips);
        await Deno.writeTextFileSync(
          "../json/sentTips.json",
          JSON.stringify(allTips),
        );

        return new Response(JSON.stringify({ message: "Tips inskickat" }), {
          status: 200,
          headers: headersCORS,
        });
      }
    }

    /* Posta ett nytt tips, tänker att man använder newdate som skapas när man skickar in för datum */
    if (url.pathname == "/publishTips") {
      let allTips = await FUNC.getJsonInformation("../json/publishedTips.json");
      let newTips = await request.json();

      if (newTips.tips == "" || newTips.sender == "" || newTips.date == "") {
        return new Response(
          JSON.stringify({ error: "Alla fält måste vara ifyllda" }),
          {
            status: 400,
            headers: headersCORS,
          },
        );
      } else {
        allTips.push(newTips);
        await Deno.writeTextFileSync(
          "../json/publishedTips.json",
          JSON.stringify(allTips),
        );

        return new Response(JSON.stringify({ message: "Tips publicerat" }), {
          status: 200,
          headers: headersCORS,
        });
      }
    }
  }

  return new Response(JSON.stringify({ error: "Not Found" }), {
    status: 404,
    headers: headersCORS,
  });
}

Deno.serve(handler);
