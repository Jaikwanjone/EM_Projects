import { createContext, useContext, useMemo, useState } from "react";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./components/Template";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const AppContent = createContext();

export function useApp() {
  return useContext(AppContent);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/comments/:id",
        element: <Comments />,
      },
      {
        path: "/likes/:id",
        element: <Likes />,
      },
    ],
  },
]);

const ThemeApp = () => {
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("dark");
  const [showDrawer, setShowDrawer] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(true);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === "dark" ? "#5F6F65" : "#808D7C",
        text: {
          fade: "#9CA986",
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContent.Provider
        value={{
          showForm,
          setShowForm,
          mode,
          setMode,
          showDrawer,
          setShowDrawer,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
        }}
      >
        <RouterProvider router={router} />

        <CssBaseline />
      </AppContent.Provider>
    </ThemeProvider>
  );
};

export default ThemeApp;
