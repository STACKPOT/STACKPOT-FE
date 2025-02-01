import { Global, ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components";
import SideBar from "@components/layouts/SideBar/SideBar";
import Footer from "@components/layouts/Footer/Footer";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import routes from "@constants/routes";

const muiTheme = createTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true,
    },
  },
});

function App() {
  const location = useLocation();

  const isSidebarVisible = location.pathname !== routes.main;

  return (
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Header />
          {isSidebarVisible && <SideBar />}
          <Outlet />
          <Footer />
        </ThemeProvider>
      </MUIThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
