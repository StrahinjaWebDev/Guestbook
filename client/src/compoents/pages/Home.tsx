import React, { useContext } from "react";
import { appContext } from "../../../context/AppProvider";

function Home() {
  const { handleLogout, user } = useContext(appContext);

  console.log(user);
  return (
    <>
      <div className="text-red-500">
        Welcome
        <>
          {user && (
            <div key={user.id}>
              <p>{user.username}</p>
            </div>
          )}
        </>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Home;
