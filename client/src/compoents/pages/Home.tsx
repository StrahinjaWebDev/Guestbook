import React, { useContext, useEffect } from "react";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import Button from "../Custom/Button";

function Home() {
  const { handleLogout, user } = useContext(appContext);

  const navigate = useNavigate();

  console.log(user);

  const handleMessagePage = () => {
    navigate("/Main");
  };

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else navigate("/home");
  }, [user, navigate]);

  return (
    <>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="w-[20em] bg-second h-2/3 xl:w-[40em] rounded-[90px]">
          <div className="mt-3 flex justify-center gap-6 xl:text-2xl">
            <p className="text-first font-semibold">Welcome back</p>
            {user && (
              <div key={user.id}>
                <p className="text-fourth font-bold">{user.username}</p>
              </div>
            )}
          </div>
          <div className="my-8 text-center flex flex-col gap-4 xl:text-base items-center">
            <p className="text-third font-medium">See what people wrote about us and feel free to leave a message.</p>
            <Button fourth label="Leave a message" onClick={handleMessagePage} />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-first font-medium text-2xl">List of last 10 messagess</p>
            {"//! Render here last 10 messages //"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
