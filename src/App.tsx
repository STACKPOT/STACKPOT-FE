import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";
import Footer from "./components/layouts/Footer/Footer";
import Modal from "./components/commons/Modal/Modal";
import LoginModal from "@components/commons/LoginModal/LoginModal";
import Dropdown from "@components/commons/Dropdown/Dropdown";
import SideBar from "@components/layouts/SideBar/SideBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
