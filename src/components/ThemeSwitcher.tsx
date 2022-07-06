import { useState } from "react"
import { useTheme } from "next-themes";
import { LightModeIcon, DarkModeIcon } from "../components/icons"
import { theme, styled } from '../theme.config'


const SwitchButton = styled("button", {
  background: 'none',
  border: "none",
  cursor: 'pointer'
})

export const ThemeSwitcher = () => {
  const {theme: currentTheme, setTheme} = useTheme();
  const toggleTheme = () =>
    setTheme(currentTheme === "light" ? "dark-theme" : "light");
  return (
    <SwitchButton onClick={toggleTheme}>
      {currentTheme === "dark-theme" ? (
          <DarkModeIcon color={theme.colors.primary as any} />
      ) : (
          <LightModeIcon color={theme.colors.muted as any}/>
      ) }
    </SwitchButton>
  )
}
