import { enviroment } from "@config/enviroment";
import { AuthProvider } from "@inube/auth";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.log("Registro del Service Worker fallido:", error);
      });
  });
}

const rootElement = document.getElementById("root");

const root = rootElement && ReactDOM.createRoot(rootElement);

root &&
  root.render(
    <React.StrictMode>
      <AuthProvider
        clientId={enviroment.CLIENT_ID}
        clientSecret={enviroment.CLIENT_SECRET}
        provider={enviroment.PROVIDER}
        realm={enviroment.REALM}
        authorizationParams={{
          redirectUri: window.location.origin + window.location.pathname,
          scope: ["openid", "profile", "email"],
        }}
        isProduction={enviroment.IS_PRODUCTION}
      >
        <App />
      </AuthProvider>
    </React.StrictMode>,
  );
