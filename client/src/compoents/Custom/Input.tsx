import React from "react";

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  primary?: boolean;
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
  type?: string;
}

const Input = ({ value, placeholder, onChange, ...props }: IInputProps) => {
  return (
    <input
      {...props}
      value={value}
      className="rounded-[60px] w-[13em] h-[2.2em] placeholder:pl-2 pl-2 xl:w-[25em]"
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
