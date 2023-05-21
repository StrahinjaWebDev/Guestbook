import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./compoents/Navbar";
import Home from "./compoents/pages/Home";
import Main from "./compoents/pages/Main";
import Login from "./compoents/pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Route>
    )
  );

  return (
    <>
      <Toaster />
      <div className="bg-first h-[100vh]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <>
        <Outlet />
      </>
    </>
  );
};

export default App;
