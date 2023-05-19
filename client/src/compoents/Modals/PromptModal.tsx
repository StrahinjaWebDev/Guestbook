import React, { useState, useEffect } from "react";

interface Props {
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmMessage?: string;
  closeMessage?: string;
  confirmed?: boolean;
}

const PromptModal = ({ message, closeMessage, onConfirm, onCancel: close, confirmMessage }: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const [confirmed] = useState(false);

  useEffect(() => {
    if (isClosing && close) {
      setTimeout(() => {
        setIsClosing(false);
        close();
      }, 200);
    }
  }, [isClosing]);

  return (
    <div className="fixed h-screen w-screen  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div
        className={`absolute transform animation-forwards text-second bg-fourth min-h-[8em] w-[15em] flex flex-col rounded-2xl justify-center border-white border-2 items-center 
        ${!isClosing ? "animate-[appearScale_0.2s_ease]" : "animate-[dissAppearScale_0.2s_ease]"}
        `}
      >
        <p className="font-bold text-center text-main mx-10">{message}</p>
        <div className="flex w-full mt-4 justify-center gap-2">
          {confirmed && (
            <button className="bg-white text-main border border-main rounded-xl px-6 py-2 font-medium" onClick={onConfirm}>
              {confirmMessage}
            </button>
          )}
          <button className="bg-white text-main border border-main rounded-xl px-6 py-2 font-medium" onClick={() => setIsClosing(true)}>
            {closeMessage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;
