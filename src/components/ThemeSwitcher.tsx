import { useState } from "react"
import { useTheme } from "next-themes";
import { useTracking } from "../contexts/tracking"
import { LightModeIcon, DarkModeIcon } from "../components/icons"
import { theme, styled } from '../theme.config'


const SwitchButton = styled("button", {
  background: 'none',
  border: "none",
  cursor: 'pointer'
})

export const ThemeSwitcher = () => {
  const { logEvent } = useTracking();
  const {theme: currentTheme, setTheme} = useTheme();

  const toggleTheme = () => {
    const nextTheme =  currentTheme === "light" ? "dark-theme" : "light"
    logEvent({
      category: 'SpecialInteraction',
      action: 'Switch Theme',
      label: `Theme: ${nextTheme}`
    })
    setTheme(nextTheme);
  }

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
