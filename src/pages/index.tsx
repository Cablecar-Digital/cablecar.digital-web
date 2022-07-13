import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { styled, theme } from "../theme.config";
import { GitHubLogoIcon, PhoneIcon, EmailIcon } from "../components/icons";
const splashText =
  "Software development &<br/> consulting in pursuit of<br/> pixel perfection.";

const SplashArea = styled("div", {
  backgroundColor: "$primary",
  color: "$background",
  padding: "4rem 5rem 4rem 5rem",
  boxShadow: "16px 16px 0px $colors$secondary",
  fontSize: "$5xl",
  fontWeight: "$bold",
  textAlign: "right",
  marginBottom: "4rem",
});

const SectionTitle = styled("h2", {
  color: "$primary",
  fontSize: "2rem",
  lineHeight: "65px",
  "&:before": {
    content: "",
    width: "70px",
    height: "4px",
    background: "$secondary",
    position: "absolute",
  },
});

const SectionWrapper = styled("section", {
  display: "flex",
  fontSize: "$xl",
  justifyContent: "space-between",
  marginBottom: "3rem",
  "> div": {
    display: "flex",
    alignItems: "center",
  },
  svg: {
    marginRight: "0.5rem",
  },
  ul: {
    listStyleType: "none",
    paddingLeft: 0,
    margin: 0,
  },
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Cable Car Digital - Software Consulting & Development Services | Full
          Stack Development
        </title>
      </Head>
      <SplashArea dangerouslySetInnerHTML={{ __html: splashText }} />
      <SectionTitle>Services</SectionTitle>
      <SectionWrapper>
        <div>
          <ul>
            <li>Responsive Web Development</li>
            <li>Front-End Development</li>
            <li>CMS Development</li>
            <li>Full Stack Application Development</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>UI Design System Development</li>
            <li>Component Library Development</li>
            <li>Digital Content Creation</li>
            <li>Technical coaching & training</li>
          </ul>
        </div>
        <div>
          <ul></ul>
        </div>
      </SectionWrapper>
      <SectionTitle>Connect with Us</SectionTitle>
      <SectionWrapper>
        <div>
          <EmailIcon color={theme.colors.primary as any} />{" "}
          <a href="mailto:bryan@cablecar.digital">bryan@cablecar.digital</a>
        </div>

        <div>
          <PhoneIcon color={theme.colors.primary as any} />
          <a href="tel:2392002312">239-200-2312</a>
        </div>
        <div>
          <GitHubLogoIcon color={theme.colors.primary as any} />
          <a href="http://github.com/Cablecar-Digital">
            github.com/Cablecar-Digital
          </a>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Home;
