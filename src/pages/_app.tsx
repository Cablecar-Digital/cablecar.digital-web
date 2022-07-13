import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes";
import "@fontsource/iosevka";
import { TrackingProvider } from "../contexts/tracking";
import { PageTransition } from "../components/PageTransition"
import { resetGlobalCss, darkTheme } from "../theme.config"

function MyApp({ Component, pageProps }: AppProps) {
  resetGlobalCss();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        // IDKW, but this works and reversing them doesnt
        light: darkTheme,
        dark: "light"
      }}
    >
      <TrackingProvider>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </TrackingProvider>
    </ThemeProvider>
  );
}

export default MyApp
