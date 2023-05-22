import React, { useState, useContext } from "react";
import Input from "../../Custom/Input";
import Button from "../../Custom/Button";
import { appContext } from "../../../../context/AppProvider";
import jwtDecode from "jwt-decode";
import { loginUser } from "../../../api/UserApi/loginUser";

interface LoginFormProps {
  // eslint-disable-next-line no-unused-vars
  setModal: (isOpen: boolean) => void;
}

const LoginForm = ({ setModal }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(appContext);

  const handleSignIn = async () => {
    const userLogin = {
      username: username,
      password: password,
    };
    const response = await loginUser(userLogin);
    if (response.success && response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser && setUser(jwtDecode(response.data));
    } else {
      setModal(true);
    }
  };
  return (
    <div className="w-[60vw] h-[24em] bg-second flex flex-col opacity-80 items-center justify-center gap-12 xl:w-[40vw]  rounded-3xl">
      <span className="text-lg text-fourth xl:text-2xl text-opacity-60">Write your messages freely</span>
      <p className="text-xl text-fourth xl:text-3xl">Login to the Guestbook</p>
      <div className="flex justify-center items-center flex-col gap-2">
        <Input primary placeholder=" Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" primary placeholder=" Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button label="Login" login onClick={handleSignIn} />
    </div>
  );
};

export default LoginForm;
