import { contextBridge } from "electron";

if (!process.contextIsolated) {
  throw new Error("contextIsolated should be enabled in the BrowserWindow");
}

try {
  contextBridge.exposeInMainWorld("electron", {
    // TODO
  });
} catch (error) {
  console.error("Failed to expose electron on the preload script", error);
}
