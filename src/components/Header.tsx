import { useState, FC, ReactNode } from "react"
import Link from "next/link"
import { useTheme } from "next-themes";
import { LightModeIcon, DarkModeIcon } from "../components/icons"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { theme, styled } from '../theme.config'

const Menu = styled("ul", {
  paddingLeft: 0,
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  margin: 0
});

const Header = styled("header", {
  height: '80px',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "3rem"
})

const Logo = styled("h1", {
  fontSize: "36px",
  lineHeight: '65px',
  margin: 0,
  marginRight: "3rem",
  color: "$primary",
  ".light": {
    color: "$secondary"
  },
  "&:before": {
    content: "",
    width: '70px',
    height: "4px",
    background: "$secondary",
    position: "absolute",
  }
})

const Actions = styled("div", {
  marginLeft: "auto"
})


export const SiteHeader: FC = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(currentTheme === "light" ? "dark-theme" : "light");

  return (
    <Header>
      <Link href="/">
        <a>
        <Logo>
            CableCar<span className="light">Digital</span>
        </Logo>
        </a>
      </Link>

      {/* <Menu>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          </Menu>
        */}
      <Actions>
        <ThemeSwitcher />
      </Actions>
    </Header>
  );
};
