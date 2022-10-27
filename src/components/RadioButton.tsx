import React from "react";
import { Dispatch, useState } from "react";

interface RadioProps {
  children: React.ReactNode;
  id: string;
  label: string;
}

export function RadioButton({
  children,
  id,
  label,
}: RadioProps) {
  return (
    <div>
      <label className="text-zinc-800 font-semibold" htmlFor={id}>
        {label}
      </label>

      <div className="mx-auto my-auto flex">
        {children}
      </div>

    </div>
  );
}

interface RadioButtonProps {
  value: string;
  type?: string;
  name: string;
  opt: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

export function RadioOption({
  value,
  type = "radio",
  name,
  opt,
}: RadioButtonProps) {
  const [selectedBtn, setSelectedBtn] = useState('')
  const isRadioSelected = (value: string): boolean => selectedBtn === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedBtn(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }

  return (
    <div className="mx-auto my-auto flex px-[5px] mt-[15px]">
      <input
        type={type}
        name={name}
        value={value}
        checked={isRadioSelected(value)}
        onChange={handleRadioClick}
      />
      <h3 className="ml-[5px] mr-[15px]">{opt}</h3>
    </div>
  )
}