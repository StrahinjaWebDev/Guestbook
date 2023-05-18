import React from "react";
import Input from "../Custom/Input";

const Login = () => {
  return (
    <div className="h-[40em] w-screen flex justify-center items-center">
      <div className="w-[60vw] h-[24em] bg-second flex flex-col opacity-80 items-center justify-center gap-12 xl:w-[40vw] ">
        <span className="text-lg text-fourth xl:text-2xl">Write your messagess freely</span>
        <p className="text-xl text-fourth xl:text-3xl">Login to the Guestbook</p>
        <div className="flex justify-center items-center flex-col gap-2">
          <Input primary placeholder=" Username..." />
          <Input primary placeholder=" Password..." />
        </div>
      </div>
    </div>
  );
};

export default Login;
