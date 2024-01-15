import { useTheme } from "@heathmont/moon-themes";

export const useSettings = () => {
  const { toggleMode, getMode } = useTheme();

  const isDarkThemeEnabled = getMode() === "dark";
  const switchModeHandler = () => {
    toggleMode();
  };

  return {
    isDarkThemeEnabled,
    switchModeHandler,
  };
};
