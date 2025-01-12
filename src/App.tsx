import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "@styles/global";
import theme from "@styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
