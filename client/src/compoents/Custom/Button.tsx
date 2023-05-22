import classNames from "classnames";
import React from "react";

interface Props {
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  third?: boolean;
  fourth?: boolean;
  fifth?: boolean;
  login?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, primary, secondary, third, fourth, fifth, login, disabled, onClick }: Props) => {
  const primaryButton =
    "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800";
  const secondaryButton =
    "text-white bg-gradient-to-r from-blue-700 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const thirdButton =
    "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2 xl:w-[5em] xl:text-lg flex justify-center items-center";
  const fouthButton =
    "text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:emerald-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-emerald-500 dark:text-emerald-500 dark:hover:text-white dark:hover:bg-emerald-500 dark:focus:ring-emerald-800 xl:w-1/3";
  const fifthButton =
    " inline-block w-full rounded-2xl bg-primary px-6 pb-2 pt-2.5 text-base font-medium uppercase text-first shadow-[0_4px_9px_-4px_#3b71ca] transition duration-500 ease-in-out hover:bg-third focus:outline-none active:bg-primary-700 disabled:bg-neutral-400 disabled:text-neutral-100";
  const loginButton =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 opacity-90";

  const buttonClasses = classNames({
    [primaryButton]: primary,
    [secondaryButton]: secondary,
    [thirdButton]: third,
    [fouthButton]: fourth,
    [fifthButton]: fifth,
    [loginButton]: login,
  });

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
