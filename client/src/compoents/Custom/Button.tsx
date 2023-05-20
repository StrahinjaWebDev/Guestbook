import classNames from "classnames";
import React from "react";

interface IButtonProps {
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  third?: boolean;
  fourth?: boolean;
  fifth?: boolean;
  onClick?: () => void;
}

const Button = ({ label, primary, secondary, third, fourth, fifth, onClick }: IButtonProps) => {
  const primaryButton =
    "text-white bg-gradient-to-br from-purple-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const secondaryButton =
    "text-white bg-gradient-to-r from-cyan-500 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const thirdButton =
    "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 xl:w-[5em] xl:text-lg flex justify-center items-center";
  const fouthButton =
    "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 xl:w-1/3";
  const fifthButton =
    " inline-block w-full rounded-2xl bg-primary px-6 pb-2 pt-2.5 text-base font-medium uppercase text-first shadow-[0_4px_9px_-4px_#3b71ca] transition duration-500 ease-in-out hover:bg-third focus:outline-none active:bg-primary-700";

  const buttonClasses = classNames({
    [primaryButton]: primary,
    [secondaryButton]: secondary,
    [thirdButton]: third,
    [fouthButton]: fourth,
    [fifthButton]: fifth,
  });

  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
