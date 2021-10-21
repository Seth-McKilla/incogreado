import { useEffect } from "react";
import { NavBar, Footer } from "../components";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import { Provider } from "../context";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    (async function () {
      try {
        await fetch("/api/ceramic/connect");
        return console.log("Successfully connected to the Ceramic network!");
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
