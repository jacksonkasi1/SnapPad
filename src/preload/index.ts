import { contextBridge, ipcRenderer } from "electron";

if (!process.contextIsolated) {
  throw new Error("contextIsolated should be enabled in the BrowserWindow");
}

try {
  contextBridge.exposeInMainWorld("electron", {
    local: navigator.language,

    closeWindow: () => ipcRenderer.send("close-window"),
    minimizeWindow: () => ipcRenderer.send("minimize-window"),
    maximizeWindow: () => ipcRenderer.send("maximize-window"),
  });
} catch (error) {
  console.error("Failed to expose electron on the preload script", error);
}
