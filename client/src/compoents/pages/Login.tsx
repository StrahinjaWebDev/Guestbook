import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import PromptModal from "../Modals/PromptModal";
import LoginForm from "./Login/LoginForm";

const Login = () => {
  const [modal, setModal] = useState(false);

  const { user } = useContext(appContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="h-[40em] w-screen flex justify-center items-center">
        <LoginForm setModal={setModal} />
        {modal &&
          createPortal(
            <PromptModal message="Wrong username or password!" closeMessage="Close" confirmed={false} onCancel={() => setModal(false)} />,
            document.body
          )}
      </div>
    </>
  );
};
export default Login;
