import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const startMsw = async () => {
  if (process.env.NODE_ENV === "local") {
    const { worker } = await import("./mocks/browser");
    await worker.start();
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
