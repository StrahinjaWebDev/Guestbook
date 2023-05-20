import React from "react";
import classNames from "classnames";

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  primary?: boolean;
  secondary?: boolean;
  disabledInput?: boolean;
  placeholder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
  type?: string;
  disabled?: boolean;
}

const Input = ({ value, placeholder, onChange, primary, secondary, disabledInput, disabled, ...props }: IInputProps) => {
  const primaryInputClasses = "rounded-[60px] w-[13em] h-[2.2em] placeholder:pl-2 pl-2 xl:w-[25em]";
  const secondaryInputClasses =
    "peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0";
  const thirdInputClasses =
    "mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const inputClasses = classNames({
    [primaryInputClasses]: primary,
    [secondaryInputClasses]: secondary,
    [thirdInputClasses]: disabledInput,
  });

  return (
    <input {...props} disabled={disabled} value={value} className={inputClasses} onChange={onChange} placeholder={placeholder}></input>
  );
};

export default Input;
