import React, { useContext, useState } from "react";
import Input from "../Custom/Input";
import { appContext } from "../../../context/AppProvider";
import Button from "../Custom/Button";
import { loginUser } from "../../api/UserApi/loginUser";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import PromptModal from "../Modals/PromptModal";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);

  const { setUsers } = useContext(appContext);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    const User = {
      username: username,
      password: password,
    };
    const response = await loginUser(User);
    console.log(User);
    console.log(response);
    if (response.success) {
      navigate("/home");
    } else setModal(true);
  };

  return (
    <div className="h-[40em] w-screen flex justify-center items-center">
      <div className="w-[60vw] h-[24em] bg-second flex flex-col opacity-80 items-center justify-center gap-12 xl:w-[40vw]  rounded-3xl">
        <span className="text-lg text-fourth xl:text-2xl text-opacity-60">Write your messagess freely</span>
        <p className="text-xl text-fourth xl:text-3xl ">Login to the Guestbook</p>
        <div className="flex justify-center items-center flex-col gap-2">
          <Input primary="true" placeholder=" Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input primary="true" placeholder=" Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button label="Login" third onClick={handleSignIn} />
      </div>
      {modal &&
        createPortal(
          <PromptModal message="Wrong username or password!" closeMessage="Close" confirmed={false} onCancel={() => setModal(false)} />,
          document.body
        )}
    </div>
  );
};

export default Login;
