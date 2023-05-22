import React from "react";
import classNames from "classnames";

interface Props {
  primary: boolean;
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({ primary, placeholder, onChange, value, ...props }: Props) => {
  const primaryTextArea =
    "peer block min-h-[8em] max-h-[13em] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0";

  const textAreaClasses = classNames({
    [primaryTextArea]: primary,
  });

  return <textarea {...props} placeholder={placeholder} value={value} className={textAreaClasses} onChange={onChange}></textarea>;
};

export default TextArea;
