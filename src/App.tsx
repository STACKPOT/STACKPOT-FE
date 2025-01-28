import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import SideBar from "@components/layouts/SideBar/SideBar";
import Footer from "@components/layouts/Footer/Footer";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const muiTheme = createTheme();

function App() {
  return (
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Header />
        <SideBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
