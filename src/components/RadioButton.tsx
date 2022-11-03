import React from "react";
import { Dispatch } from "react";

const RadioContext = React.createContext({ name: "", currentValue: null as any, setValue: (value: string) => { } });

interface RadioProps {
  id: string;
  label: string;
  name: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export function RadioButton({
  id,
  name,
  label,
  value,
  setValue,
  children,
}: RadioProps) {

  return (
    <RadioContext.Provider value={{ name, currentValue: value, setValue }}>
      <label className="text-zinc-800 font-semibold" htmlFor={id}>
        {label}
      </label>

      <div className="mx-auto my-auto flex">
        {children}
      </div>
    </RadioContext.Provider>
  );
}

interface RadioButtonProps {
  value: string;
  type?: string;
  opt: string;
}

export function RadioOption({
  value,
  type = "radio",
  opt,
}: RadioButtonProps) {
  const { name, currentValue, setValue } = React.useContext(RadioContext);

  return (
    <div className="mx-auto my-auto flex px-[5px] mt-[15px]">
      <input
        name={name}
        type={type}
        value={value}
        checked={currentValue === value}
        onChange={setValue.bind(null, value)}
      />
      <h3 className="ml-[5px] mr-[15px]">{opt}</h3>
    </div>
  )
}
