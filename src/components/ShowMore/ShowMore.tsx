import { useEffect, useState } from "react";

type Props = { text: string };

export default function ShowMore({ text }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [textStr, setTextStr] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setTextStr(text.slice(0, text.indexOf(".") + 1));
    } else {
      setTextStr(text);
    }
  }, [isOpen]);

  const openText = () => {
    setIsOpen(true);
  };
  const closeText = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-full mt-20 flex justify-center items-start">
      <div className="p-4 flex flex-col rounded-xl bg-white max-w-96">
        <p className="text-sm font-medium">
          {textStr}
          <span className="">
            {!isOpen ? (
              <button
                className="font-semibold text-xs text-gray-700 underline hover:no-underline"
                onClick={openText}
              >
                Развернуть...
              </button>
            ) : (
              <button
                className="font-semibold text-xs text-gray-700 underline hover:no-underline"
                onClick={closeText}
              >
                Свернуть...
              </button>
            )}
          </span>
        </p>
      </div>
    </div>
  );
}
