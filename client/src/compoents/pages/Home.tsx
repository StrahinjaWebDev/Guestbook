import React, { useContext, useEffect } from "react";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const { handleLogout, user } = useContext(appContext);

  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else navigate("/home");
  }, [user, navigate]);

  return (
    <>
      <div className="text-red-500">
        Welcome
        {user && (
          <div key={user.id}>
            <p className="text-blue-500">{user.username}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
