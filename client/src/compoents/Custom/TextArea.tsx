import React from "react";
import classNames from "classnames";

interface ITextArea {
  primary: boolean;
  placeholder: string;
  id?: string;
}

const TextArea = ({ primary, placeholder, ...props }: ITextArea) => {
  const primaryTextArea =
    "peer block min-h-[4em] max-h-[13em] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0";

  const textAreaClasses = classNames({
    [primaryTextArea]: primary,
  });

  return <textarea {...props} placeholder={placeholder} className={textAreaClasses}></textarea>;
};

export default TextArea;
