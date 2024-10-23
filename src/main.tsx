import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const startMsw = async () => {
  if (import.meta.env.VITE_MOCK === "true") {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: {
        // Specify the worker script URL relative to the _root_.
        url: "venteregister/mockServiceWorker.js",
      },
    });
  }
};

await startMsw();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <div className="page-layout">
        <main>
          <App />
        </main>
      </div>
    </div>
  </React.StrictMode>,
);
