import { styled, theme } from '../theme.config'
import { HeartIcon } from "../components/icons"

const Footer = styled("footer", {
  background: "$primary",
  color: "$background",
  padding: "2rem",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "svg": {
    margin: "0 0.5rem 0"
  }
})

export const SiteFooter = () => {
  return (
    <Footer>
      Built with <HeartIcon color={theme.colors.red as any} /> in Chicago, IL. &copy; 2022. All rights reserved.
    </Footer>
  )
}
