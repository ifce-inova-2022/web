import { Eye, EyeClosed, Pencil } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";

interface FieldProps {
  id: string;
  type: React.HTMLInputTypeAttribute | undefined;
  initialType?: React.HTMLInputTypeAttribute;
  label: string;
  icon?: React.ReactNode;
  placeholder: string;
  isEditable?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  required?: boolean;
  width?: "50%" | "100%";
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
  isEditable = false,
  required = true,
  width = "100%",
}: FieldProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [typed, setTyped] = useState(type);
  const [toggleEdit, setToggleEdit] = useState(isEditable);

  function handleChange(e: { target: { value: string } }) {
    setValue(e.target.value);
  }

  function handleClick() {
    setIsVisible(!isVisible);
    if (typed === "password") return setTyped("text");
    return setTyped("password");
  }

  const isPassword = initialType === "password";

  const widthInput = width === "50%" ? "w-[50%]" : "w-full";

  return (
    <fieldset className={`${widthInput} flex flex-col gap-1 group`}>
      <label className="text-zinc-800 font-semibold" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <div
          className={`absolute top-3.5 left-2 text-xl text-zinc-600 
          `}
        >
          {icon}
        </div>
        <input
          value={value}
          onChange={handleChange}
          disabled={toggleEdit}
          className={`${
            toggleEdit ? "disabled:cursor-not-allowed disabled:border-none" : ""
          } w-full min-w-min p-3 ${icon ? "pl-10" : ""}
          bg-zinc-200 border-b-2 border-r-2 border-zinc-300 
          outline-none hover:border-zinc-500 focus:border-zinc-500
          rounded-md transition-colors`}
          id={id}
          type={typed}
          placeholder={placeholder}
          required={required}
        />
        {isPassword ? (
          <button
            type={"button"}
            className="absolute top-3 right-3 text-xl"
            onClick={handleClick}
          >
            {isVisible ? <Eye /> : <EyeClosed />}
          </button>
        ) : (
          ""
        )}
        {isEditable ? (
          <button
            className={`${
              toggleEdit
                ? "bg-zinc-300 hover:bg-zinc-400/40"
                : "bg-custom-green-default text-zinc-50"
            } absolute top-0 right-0 text-xl hover:scale-[1.02] p-3 rounded transition-colors`}
            onClick={() => setToggleEdit(!toggleEdit)}
          >
            <Pencil size={24} />
          </button>
        ) : (
          ""
        )}
      </div>
    </fieldset>
  );
}
