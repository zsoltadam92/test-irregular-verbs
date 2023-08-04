import React, { useContext } from "react";
import "./App.css";

import CardProvider from "./store/CardProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayoutPage from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ListPage from "./pages/List";
import SettingsPage from "./pages/Settings";
import GamePage from "./pages/Game";
// import SettingsProvider from "./store/SettingsProvider";
// import SettingsContext from "./store/settings-context";

function App() {
  //   const settingsCtx = useContext(SettingsContext);
  //   console.log(settingsCtx.settingsDone);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayoutPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/settings", element: <SettingsPage /> },
        {
          path: "/game",
          element: <GamePage />,
        },
      ],
    },
  ]);

  return (
    // <SettingsProvider>
    <CardProvider>
      <RouterProvider router={router}></RouterProvider>
    </CardProvider>
    // </SettingsProvider>
  );
}

export default App;
