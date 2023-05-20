import React, { useContext } from "react";
import { appContext } from "../../context/AppProvider";
import Button from "./Custom/Button";

const Navbar = () => {
  const { handleLogout, user } = useContext(appContext);
  return (
    <div className="w-screen h-[6em] bg-first flex justify-center items-end gap-12 xl:justify-around">
      <p className="text-second font-semibold text-4xl xl:text-[3.2em]">Guestbook</p>
      {user !== null && <Button onClick={handleLogout} label="Logout" third />}
    </div>
  );
};

export default Navbar;
