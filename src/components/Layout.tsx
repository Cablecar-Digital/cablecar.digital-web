import { SiteHeader } from "./Header"
import { styled } from '../theme.config'

const Container = styled("div", {
  width: "996px",
  margin: "2rem auto",
  /* border: "1px solid red", */
  height: "100vh"
})

export const Layout = ({ children }) => {
  return <div>
    <Container>
      <SiteHeader/>
      {children}
    </Container>
  </div>;
};

export default Layout;
