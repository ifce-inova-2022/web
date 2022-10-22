import { Eye, EyeClosed } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";

interface FieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  type: React.HTMLInputTypeAttribute | undefined;
  initialType?: React.HTMLInputTypeAttribute;
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
    <fieldset className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <div
          className={`top-[1.65rem] py-[0.75rem] px-3 rounded-l group-hover:bg-primary-500 dark:group-hover:bg-primary-200
        group-focus:bg-primary-500  dark:group-focus:bg-primary-200 group-hover:text-zinc-50 group-focus:text-zinc-50 absolute transition-colors`}
        >
          {icon}
        </div>
        <input
          value={value}
          onChange={handleChange}
          className="w-full p-2 bg-zinc-400/20 rounded"
          id={id}
          type={typed}
          placeholder={placeholder}
          required={required}
        />
        {isPassword ? (
          <button
            type={"button"}
            className="absolute top-2 right-3 text-xl"
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
