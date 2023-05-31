import { Box } from "@mui/material";
import "./styles/app.css";
import LogInScreen from "./pages/LogInScreen";
import RegisterScreen from "./pages/RegisterScreen";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MessengerScreen from "./pages/MessengerScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<LogInScreen />} />
        <Route path="/sing-up" element={<RegisterScreen />} />
      </Route>
      <Route path="/messenger">
        <Route index element={<MessengerScreen />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
