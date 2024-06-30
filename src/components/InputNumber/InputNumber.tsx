import { useState } from "react";
import Message from "../Message/Message";

type Props = {};

export default function InputNumber({}: Props) {
  const [inputNumber, setInputNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputNumber) setMessage("Введите число");
    else handleNumber(Number(inputNumber));
  };

  const handleNumber = (num: number) => {
    if (isNaN(Number(num))) {
      setMessage("Не число");
      return;
    }

    if (num > 0) {
      setMessage("Число больше нуля");
    } else if (num < 0) {
      setMessage("Число меньше нуля");
    } else {
      setMessage("Число равно нулю");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        className="p-4 flex flex-col rounded-xl bg-white"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="px-4 py-1 mb-2 text-sm border border-gray-300 rounded-lg"
          placeholder="Введите число"
          onChange={(e) => {
            setInputNumber(e.target.value);
          }}
        />

        <div className="flex justify-center">
          <button
            className="px-4 py-2 font-medium text-white text-sm bg-blue-500 rounded-lg"
            type="submit"
          >
            Отправить
          </button>
        </div>

        <Message message={message} />
      </form>
    </div>
  );
}
