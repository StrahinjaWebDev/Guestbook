import React, { useState, useEffect } from "react";
import Input from "../Custom/Input";
import Button from "../Custom/Button";
import { User } from "../../model/User";
import { putUser } from "../../api/UserApi/putUser";
import { toast } from "react-hot-toast";

interface Props {
  onConfirm?: () => void;
  onCancel?: () => void;
  user?: User | null;
  // eslint-disable-next-line no-unused-vars
  setEditUser?: (isOpen: boolean) => void;
}

const EditUserModal = ({ onCancel, user, setEditUser }: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const updateUser = async () => {
    const updatedUser = {
      password: password,
      admin: admin,
    };

    try {
      const response = await putUser(user?.id || "", updatedUser);
      if (response.success && setEditUser) {
        toast.success("User updated successfully!");
        setEditUser(false);
      } else {
        toast.error("User didn't get updated, try again later...");
        setEditUser && setEditUser(false);
      }
    } catch (error) {
      console.log(error);
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

  console.log(user);
  return (
    <div className="fixed h-screen w-screen  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div
        className={`absolute transform animation-forwards text-second bg-third bg-opacity-50 opacity-80 h-[22em] w-[19em] xl:w-[36em] flex flex-col rounded-2xl justify-center border-white border-2 items-center gap-4
        ${!isClosing ? "animate-[appearScale_0.2s_ease]" : "animate-[dissAppearScale_0.2s_ease]"}
        `}
      >
        <p className="text-first text-opacity-90 text-lg font-medium">{user?.username} </p>
        <div className="flex items-center gap-3">
          <p className="text-fourth text-opacity-80">Password: </p>
          <Input primary placeholder="Input password here..." defaultValue={user?.password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="flex gap-3 items-center">
          <p className="text-fourth text-opacity-80 font-medium">
            Do you want to this user be admin? <span className="text-emerald-600 text-lg">{admin ? "Yes" : "No"}</span>
          </p>
          <Button primary label="Yes" onClick={() => setAdmin(true)} />
          <Button third label="No" onClick={() => setAdmin(false)} />
        </div>

        <p className="font-bold text-center text-red-500 mx-10">Are you sure you want to change informations of this user?</p>
        <div className="flex w-full mt-4 justify-center gap-2">
          <button className="bg-white text-main border border-main rounded-xl px-6 py-2 font-medium" onClick={updateUser}>
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

export default EditUserModal;
