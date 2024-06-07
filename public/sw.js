self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

const isProduction = !self.location.hostname.includes("localhost"); // O usa import.meta.env.MODE si es compatible
let inMemoryAccessToken = null;

self.addEventListener("fetch", (event) => {
  const { request } = event;

  const CLIENT_ID = "d0ad303a6f0f493b80db2047634ee3ef";
  const CLIENT_SECRET = "679d489b-953e-4796-bcc6-bdd3cd9b1ae6";
  const REALM = "RFP4LVMZ2PRES949DFW35F94QM";

  if (request.url.endsWith("/oauth2/token") && request.method === "POST") {
    event.respondWith(
      (async () => {
        const modifiedRequest = request.clone();
        const bodyParams = new URLSearchParams(await modifiedRequest.text());

        bodyParams.set("client_id", CLIENT_ID);
        bodyParams.set("client_secret", CLIENT_SECRET);
        bodyParams.set("realm", REALM);

        const newRequest = new Request(modifiedRequest, {
          body: bodyParams.toString(),
          method: "POST",
          headers: modifiedRequest.headers,
          credentials: modifiedRequest.credentials,
        });

        const response = await fetch(newRequest);

        if (response.ok) {
          const responseData = await response.clone().json();
          if (responseData.access_token) {
            if (isProduction) {
              inMemoryAccessToken = responseData.access_token;
            } else {
              const cache = await caches.open("access-token-cache");
              await cache.put(
                "access-token",
                new Response(responseData.access_token),
              );
            }
          }
        }

        return response;
      })(),
    );
  } else if (
    request.url.includes("/iclient-query-process-service/api") ||
    request.url.includes("/iclient-persistence-process-service/api")
  ) {
    event.respondWith(
      (async () => {
        try {
          let accessToken = null;

          if (isProduction) {
            accessToken = inMemoryAccessToken;
          } else {
            const cache = await caches.open("access-token-cache");
            const tokenResponse = await cache.match("access-token");
            accessToken = tokenResponse ? await tokenResponse.text() : null;
          }

          if (!accessToken) {
            return new Response("Unauthorized", { status: 401 });
          }

          const modifiedHeaders = new Headers(request.headers);
          modifiedHeaders.set("Authorization", `Bearer ${accessToken}`);
          modifiedHeaders.set("Realm", REALM);

          const modifiedRequest = new Request(request.url, {
            method: request.method,
            headers: modifiedHeaders,
            body:
              request.method !== "GET" ? await request.clone().text() : null,
            mode: request.mode,
            credentials: request.credentials,
            cache: request.cache,
            redirect: request.redirect,
            referrer: request.referrer,
            integrity: request.integrity,
          });

          return fetch(modifiedRequest);
        } catch (error) {
          console.error("Fetch error:", error);
          return new Response("Internal Server Error", { status: 500 });
        }
      })(),
    );
  } else {
    event.respondWith(fetch(request));
  }
});
