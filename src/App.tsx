import { Box } from "@mui/material";
import "./styles/app.css";
import LogInScreen from "./pages/LogInScreen";
import RegisterScreen from "./pages/RegisterScreen";
function App() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LogInScreen />
      <RegisterScreen />
    </Box>
  );
}

export default App;
