import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AdminApp from "./components/AdminApp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AdminApp />
    </ThemeProvider>
  );
}

export default App;
