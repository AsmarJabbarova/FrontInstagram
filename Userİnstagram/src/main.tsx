import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import App from "./App.tsx";
import Login from "./pages/Login/Login.tsx";
import Regsiter from "./pages/Register/Regsiter.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import Search from "./pages/Search/Search.tsx";
import Direct from "./pages/Direct/Direct.tsx";
import Profil from "./pages/Profil/Profil.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <Regsiter />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/dm",
        element: <Direct />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
