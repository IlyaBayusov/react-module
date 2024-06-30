import { useRef } from "react";

type Props = {};

export default function Form({}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Значение input:", inputRef.current?.value);
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
          ref={inputRef}
          type="text"
          className="px-4 py-1 mb-2 text-sm border border-gray-300 rounded-lg"
          placeholder="Текст"
        />

        <div className="flex justify-center">
          <button
            className="px-4 py-2 font-medium text-white text-sm bg-blue-500 rounded-lg"
            type="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
