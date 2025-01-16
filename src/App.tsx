import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import SideBar from "@components/layouts/SideBar/SideBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <SideBar />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;