import { FC, ReactNode } from 'react'
import { SiteHeader } from "./Header"
import { SiteFooter } from "./Footer"
import { styled } from '../theme.config'

const Container = styled("div", {
  width: "996px",
  margin: "0 auto",
});

const Page = styled("div", {
  margin: "0 auto",
  paddingTop: "2rem",
  backgroundColor: "$background",
  zIndex: 1
});

const Main = styled("main", {
  minHeight: "100vh",
});

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Page>
      <Main>
        <Container>
            <SiteHeader />
            {children}
        </Container>
        <SiteFooter />
      </ Main>
    </Page>
  )
};

export default Layout;
