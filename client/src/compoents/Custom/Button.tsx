import classNames from "classnames";
import React from "react";

interface IButtonProps {
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  third?: boolean;
  fourth?: boolean;
  onClick?: () => void;
}

const Button = ({ label, primary, secondary, third, fourth, onClick }: IButtonProps) => {
  const primaryButtonClasses =
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const secondaryButtonClasses =
    "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  const thirdButtonClasses =
    "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ";
  const fouthButtonClasses =
    "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800";

  const buttonClasses = classNames({
    [primaryButtonClasses]: primary,
    [secondaryButtonClasses]: secondary,
    [thirdButtonClasses]: third,
    [fouthButtonClasses]: fourth,
  });

  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
