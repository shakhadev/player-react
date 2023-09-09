import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { CategoryProvider } from "./Context/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/full-songs",
    element: (
      <>
        <h1>Full Songs</h1>
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <h1>404 Page dont found</h1>
      </>
    ),
  },
  {
    path: "/about-us",
    element: (
      <div className="flex items-center justify-center pt-[100px]">
        <h1>
          <span className="text-[#f46242]">Frontend-Developer:</span> Shaxzod
          Xabibullayev
        </h1>
      </div>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CategoryProvider>
  </React.StrictMode>
);
