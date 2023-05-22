import React, { useState, useEffect } from "react";
import Input from "../Custom/Input";
import Button from "../Custom/Button";
import { createNewUser } from "../../api/UserApi/postNewUser";
import { toast } from "react-hot-toast";

interface Props {
  onConfirm?: () => void;
  onCancel?: () => void;
}

const AddUserModal = ({ onCancel }: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleNewUser = async () => {
    if (username === "") {
      toast.error("Please enter a username");
      return;
    }

    if (password === "") {
      toast.error("Please enter a password");
      return;
    }

    const newUser = {
      username: username,
      password: password,
      admin: admin,
    };
    const response = await createNewUser(newUser);
    if (response.success) {
      toast.success("User added!");
      setIsClosing(true);
    } else if (response.error) {
      toast.error("Error while creating new user...");
      setIsClosing(true);
    }
  };

  useEffect(() => {
    if (isClosing && onCancel) {
      setTimeout(() => {
        setIsClosing(false);
        onCancel();
      }, 200);
    }
  }, [isClosing, onCancel]);

  return (
    <div className="fixed h-screen w-screen  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div
        className={`absolute transform animation-forwards text-second bg-first opacity-80 h-[20em] w-[19em] xl:w-[36em] flex flex-col rounded-2xl justify-center border-white border-2 items-center gap-4
        ${!isClosing ? "animate-[appearScale_0.2s_ease]" : "animate-[dissAppearScale_0.2s_ease]"}
        `}
      >
        <div className="flex items-center gap-3">
          <p className="text-fourth text-opacity-80">Username: </p>
          <Input primary placeholder="Input username here..." onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-fourth text-opacity-80">Password: </p>
          <Input primary placeholder="Input password here..." onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="flex gap-3 items-center">
          <p className="text-fourth text-opacity-80 font-medium">
            Is new user admin? <span className="text-lime-500">{admin ? "Yes" : "No"}</span>
          </p>
          <Button primary label="Yes" onClick={() => setAdmin(true)} />
          <Button third label="No" onClick={() => setAdmin(false)} />
        </div>

        <p className="font-bold text-center text-red-500 mx-10">Are you sure you want to add this user?</p>
        <div className="flex w-full mt-4 justify-center gap-2">
          <button className="bg-white text-main border border-main rounded-xl px-6 py-2 font-medium" onClick={handleNewUser}>
            Yes
          </button>
          <button className="bg-white text-main border border-main rounded-xl px-6 py-2 font-medium" onClick={() => setIsClosing(true)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
