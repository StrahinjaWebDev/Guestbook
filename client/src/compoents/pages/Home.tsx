import React, { useContext, useEffect } from "react";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import WelcomeBack from "./Home/WelcomeBack";
import Admin from "./Home/Admin";

function Home() {
  const { user } = useContext(appContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else navigate("/home");
  }, [user]);

  return (
    <>
      <div className="flex items-center justify-center h-[80vh] gap-[4em] flex-col xl:flex-row">
        <WelcomeBack />
        <Admin />
      </div>
    </>
  );
}

export default Home;
