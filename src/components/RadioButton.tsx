import React from "react";
import { Dispatch, useState } from "react";

interface RadioProps {
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  name: string;
  opt1: string;
  opt2: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  required?: boolean;
}

export function RadioButton({
  id,
  label,
  type = "radio",
  name,
  opt1,
  opt2,
  required = true,
}: RadioProps) {
  const [selectedBtn, setSelectedBtn] = useState('isNotAdmin')
  const isRadioSelected = (value: string): boolean => selectedBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedBtn(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }
  return (
    <div>
      <label className="text-zinc-800 font-semibold" htmlFor={id}>
        {label}
      </label>

      <div className="mx-auto my-auto flex px-[5px] mt-[15px]">
        <input
          type={type}
          name={name}
          value="isNotAdmin"
          checked={isRadioSelected("isNotAdmin")}
          onChange={handleRadioClick}
        />
        <h3 className="ml-[5px] mr-[15px]">{opt1}</h3>

        <input
          type={type}
          name={name}
          value="isAdmin"
          checked={isRadioSelected("isAdmin")}
          onChange={handleRadioClick}
        />
        <h3 className="ml-[5px] mr-[15px]">{opt2}</h3>
      </div>
    </div>
  );
}
