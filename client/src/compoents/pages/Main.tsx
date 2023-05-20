import React from "react";
import Input from "../Custom/Input";
import Button from "../Custom/Button";
import Label from "../Custom/Label";
import TextArea from "../Custom/TextArea";

const Main = () => {
  return (
    <div className="flex justify-center items-center h-3/4 flex-col">
      <div className=" rounded-lg bg-fourth p-6 w-[20em] xl:w-[35em]">
        <form>
          <div className="relative mb-6">
            <Input secondary type="text" id="nameInput" placeholder="Name" />
            <Label htmlText="nameInput" primary text="Name" />
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
