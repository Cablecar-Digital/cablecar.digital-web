import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import "@fontsource/iosevka";
import { PageTransition } from '../components/PageTransition'
import { resetGlobalCss, darkTheme } from '../theme.config'

function MyApp({ Component, pageProps }: AppProps) {
  resetGlobalCss();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: darkTheme,
        dark: "light"
      }}
    >
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </ThemeProvider>
  );
}

export default MyApp
