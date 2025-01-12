import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
