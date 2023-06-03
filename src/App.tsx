import "./styles/app.css";
import LogInScreen from "./pages/LogInScreen";
import RegisterScreen from "./pages/RegisterScreen";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PivatRoute from "./pages/PivatRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<LogInScreen />} />
        <Route path="/sing-up" element={<RegisterScreen />} />
      </Route>
      <Route path="/messenger">
        <Route index element={<PivatRoute />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
