import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const startMsw = async () => {
  if (import.meta.env.MODE === "mock") {
    const { worker } = await import("./mocks/browser");
    await worker.start();
  }
};

startMsw().then(() =>
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <div className="page-wrapper">
        <div className="page-layout">
          <main>
            <App />
          </main>
        </div>
      </div>
    </React.StrictMode>,
  ),
);
