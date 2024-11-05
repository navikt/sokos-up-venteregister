import {
  faro,
  getWebInstrumentations,
  initializeFaro,
} from "@grafana/faro-web-sdk";
import { getEnvironment } from "./environment";

type TelemetryCollectorURL =
  | "https://telemetry.nav.no/collect"
  | "https://telemetry.ekstern.dev.nav.no/collect"
  | "http://localhost:12347";

function getTelemetryCollectorURL(): TelemetryCollectorURL {
  if (getEnvironment() === "production") {
    return "https://telemetry.nav.no/collect";
  }

  if (getEnvironment() === "development") {
    return "https://telemetry.ekstern.dev.nav.no/collect";
  }

  return "http://localhost:12347";
}

export function initGrafanaFaro() {
  initializeFaro({
    isolate: true,
    url: getTelemetryCollectorURL(),
    app: {
      name: "sokos-up-venteregister",
    },
    instrumentations: [
      ...getWebInstrumentations({
        captureConsole: false,
      }),
    ],
  });
}

export function logFaroError(error: Error) {
  if (getEnvironment() != "local") {
    faro.api.pushError(error);
  }
}
