declare global {
  interface Window {
    context: {
      local: string;
    };
    electron: {
      closeWindow: () => void;
      minimizeWindow: () => void;
      maximizeWindow: () => void;
    };
  }
}
