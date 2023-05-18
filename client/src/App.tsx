import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./compoents/Navbar";
import SignIn from "./compoents/pages/SignIn";
import Home from "./compoents/pages/Home";
import Main from "./compoents/pages/Main";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Route>
    )
  );

  return (
    <div className="bg-first">
      <RouterProvider router={router} />
    </div>
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
