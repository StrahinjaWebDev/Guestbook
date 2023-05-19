import React, { useContext } from "react";
import { appContext } from "../../../context/AppProvider";

function Home() {
  const { handleLogout, user } = useContext(appContext);

  console.log(user);

  return (
    <>
      <div className="text-red-500">
        Welcome
        <div>
          {user && (
            <div key={user.id}>
              <p className="text-blue-500">{user.username}</p>
            </div>
          )}
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Home;
