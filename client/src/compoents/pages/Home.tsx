import React, { useContext } from "react";
import { appContext } from "../../../context/AppProvider";

function Home() {
  const { users } = useContext(appContext);

  return (
    <>
      <div className="text-red-500">Welcome</div>
    </>
  );
}

export default Home;
