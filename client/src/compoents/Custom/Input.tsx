import React from "react";
import classNames from "classnames";

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  primary?: boolean;
  secondary?: boolean;
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
  type?: string;
}

const Input = ({ value, placeholder, onChange, primary, secondary, ...props }: IInputProps) => {
  const primaryInputClasses = "rounded-[60px] w-[13em] h-[2.2em] placeholder:pl-2 pl-2 xl:w-[25em]";
  const secondaryInputClasses =
    "peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0";

  const inputClasses = classNames({
    [primaryInputClasses]: primary,
    [secondaryInputClasses]: secondary,
  });

  return <input {...props} value={value} className={inputClasses} onChange={onChange} placeholder={placeholder}></input>;
};

export default Input;
