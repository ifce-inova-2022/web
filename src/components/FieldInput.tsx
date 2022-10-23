import { Eye, EyeClosed } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";

interface FieldProps {
  id: string;
  type: React.HTMLInputTypeAttribute | undefined;
  initialType?: React.HTMLInputTypeAttribute;
  label: string;
  icon?: React.ReactNode;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  required?: boolean;
}

export function FieldInput({
  id,
  label,
  icon,
  placeholder,
  type,
  initialType = type,
  value,
  setValue,
  required = true,
}: FieldProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [typed, setTyped] = useState(type);

  function handleChange(e: { target: { value: string } }) {
    setValue(e.target.value);
  }

  function handleClick() {
    setIsVisible(!isVisible);
    if (typed === "password") return setTyped("text");
    return setTyped("password");
  }

  const isPassword = initialType === "password";

  return (
    <fieldset className="w-full flex flex-col gap-1 group">
      <label className="text-zinc-800 font-semibold" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <div
          className={`absolute top-2.5 left-2 text-xl text-zinc-600
          `}
        >
          {icon}
        </div>
        <input
          value={value}
          onChange={handleChange}
          className="w-full min-w-min p-2 pl-10
          bg-zinc-200 border-b-2 border-r-2 border-zinc-300 
          outline-none hover:border-zinc-500 focus:border-zinc-500
          rounded-md transition-colors"
          id={id}
          type={typed}
          placeholder={placeholder}
          required={required}
        />
        {isPassword ? (
          <button
            type={"button"}
            className="absolute top-2.5 right-3 text-xl"
            onClick={handleClick}
          >
            {isVisible ? <Eye /> : <EyeClosed />}
          </button>
        ) : (
          ""
        )}
      </div>
    </fieldset>
  );
}
