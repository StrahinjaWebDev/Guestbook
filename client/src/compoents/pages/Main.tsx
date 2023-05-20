import React, { useContext } from "react";
import Input from "../Custom/Input";
import Button from "../Custom/Button";
import Label from "../Custom/Label";
import TextArea from "../Custom/TextArea";
import { appContext } from "../../../context/AppProvider";

const Main = () => {
  const { user } = useContext(appContext);
  return (
    <div className="flex justify-center items-center h-3/4 flex-col">
      <div className=" rounded-lg bg-gray-300 opacity-90 p-6 w-[20em] xl:w-[35em]">
        <form>
          <div className="relative mb-6">
            <Input disabledInput type="text" id="nameInput" defaultValue={user?.username} disabled />
            <Label htmlText="nameInput" primary text={user?.username} />
          </div>

          <div className="relative mb-6">
            <Input secondary type="email" id="emailInput" placeholder="Email address" />
            <Label htmlText="emailInput" primary text="Email address" />
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <TextArea primary id="message" placeholder="Message" />
            <Label htmlText="message" primary text="Message" />
          </div>

          <Button fifth label="Send" />
        </form>
      </div>
    </div>
  );
};

export default Main;
