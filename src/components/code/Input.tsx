import { ChangeEvent, useState } from "react";

type Props = {
  index: number;
  getValue: (value: string, index: number) => void;
};

const Input = ({ index, getValue }: Props) => {
  const [value, setValue] = useState<string>("");

  const checkValue = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value.slice(-1);
    setValue(currentValue);
    getValue(currentValue, index);

    const nextElement = e.currentTarget.nextSibling;
    if (nextElement instanceof HTMLInputElement) {
      nextElement.disabled = false;
      nextElement.focus();
    }
  };

  return (
    <input
      value={value}
      disabled={index > 0}
      onChange={checkValue}
      className="transition case-in-out duration-300 flex flex-1 items-center
        disabled:cursor-not-allowed border-2 border-gray-300 rounded-md h-14 w-14
        text-center focus:outline-none text-2xl font-bold text-black"
      type="number"
    />
  );
};

export default Input;
