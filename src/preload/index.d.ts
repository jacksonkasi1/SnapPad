declare global {
  interface Window {
    // electron: ElectronAPI
    context: {};
    electron: {
      closeWindow: () => void;
      minimizeWindow: () => void;
      maximizeWindow: () => void;
    };
  }
}
