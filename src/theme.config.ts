import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      grayDark: "#2d3748",
      midDark: "#1F2937",
      text: "$midDark",
      background: "$muted",

      primary: "rgb(8, 79, 149)",
      primary50: "rgba(8, 79, 149, 0.5)",
      primary25: "rgba(8, 79, 149, 0.25)",
      primaryHover: "$primary25",
      secondary: "#3EAEE2",
      muted: "#F1F5F9",
      success: "#9ae6b4",
      info: "#63b3ed",
      warning: "#faf089",
      danger: "#feb2b2",
      light: "#f7fafc",
      dark: "#2d3748",
      textMuted: "#718096",


      gray100: "#f7fafc",
      gray200: "#edf2f7",
      gray300: "#e2e8f0",
      gray400: "#cbd5e0",
      gray500: "#a0aec0",
      gray600: "#718096",
      gray700: "#4a5568",
      gray800: "#2d3748",
      gray900: "#1a202c",

    },
    space: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fonts: {
      sans: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
      mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      body: '"Iosevka", system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      heading: '"Iosevka", Helvetica, sans-serif',
      monospace:
        'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    // Leading
    lineHeights: {
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
      body: 1.625,
      heading: 1.25,
    },
    // Tracking
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    sizes: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      px: "1px",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "1of2": "50%",
      "1of3": "33.333333%",
      "2of3": "66.666667%",
      "1of4": "25%",
      "2of4": "50%",
      "3of4": "75%",
      "1of5": "20%",
      "2of5": "40%",
      "3of5": "60%",
      "4of5": "80%",
      "1of6": "16.666667%",
      "2of6": "33.333333%",
      "3of6": "50%",
      "4of6": "66.666667%",
      "5of6": "83.333333%",
      "1of12": "8.333333%",
      "2of12": "16.666667%",
      "3of12": "25%",
      "4of12": "33.333333%",
      "5of12": "41.666667%",
      "6of12": "50%",
      "7of12": "58.333333%",
      "8of12": "66.666667%",
      "9of12": "75%",
      "10of12": "83.333333%",
      "11of12": "91.666667%",
      full: "100%",
      screenHeight: "100vh",
      screenWidth: "100vw",
    },
    borderWidths: {
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
      px: "1px",
    },
    borderStyles: {
      // TODO
    },
    radii: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      full: "9999px",
    },
    shadows: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    zIndices: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      auto: "auto",
    },
    transitions: {
      none: "none",
      all: "all",
      default:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280x)",
    "2xl": "(min-width: 1536px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value,
    }),
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    text: "$muted",
    background: "$dark",
    primary: "$muted"
  }
})

const heading = {
  fontFamily: "$heading",
  fontWeight: "$bold",
  lineHeight: "$10",
  m: "0",
  mb: "0.5em",
};

export const resetGlobalCss = globalCss(...normalize, {
  "*": {
    boxSizing: "inherit",
  },
  "html,__next": {
    minHeight: "100%",
  },
  body: {
    margin: 0,
    minHeight: "100%",
    backgroundColor: "$background",
    color: "$text",
    fontSize: "16px",
    fontFamily: "$body",
    lineHeight: "$body",
    fontWeight: "$medium",
    boxSizing: "border-box",
  },
  a: {
    color: "$primary",
    textDecoration: "none",
    "&:hover": {
      color: "$odMagenta",
      textDecoration: "underline",
    },
  },
  h1: {
    ...heading,
    fontSize: "$4xl",
    mt: "$2",
    color: "$odGreen",
  },
  h2: {
    ...heading,
    fontSize: "$3xl",
    mt: "$2",
    color: "$odMagenta",
  },
  h3: {
    ...heading,
    fontSize: "$xl",
    mt: "$3",

    color: "$odOrange",
  },
  h4: {
    ...heading,
    fontSize: "$xl",

    color: "$odMagenta",
  },
  "h4 > a": {
    color: "$odGreen",
  },
  h5: {
    ...heading,
    fontSize: "$xl",
    color: "$odCyan",
  },
  h6: {
    ...heading,
    fontSize: "$xl",
    mb: "$2",

    color: "$odOrange",
  },
  code: {},
  pre: {},
  strong: {},
  hr: {
    bg: "$muted",
    border: "$0",
    height: "1px",
    m: "$3",
  },
});
