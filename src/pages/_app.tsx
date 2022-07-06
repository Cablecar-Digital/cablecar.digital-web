import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import "@fontsource/iosevka";
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
