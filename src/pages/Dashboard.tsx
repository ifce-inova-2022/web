import { SetStateAction, useState } from "react";
import { FieldInput } from "../components/FieldInput";

export function Dashboard() {
  const [value, setValue] = useState("");

  return (
    <div>
      <FieldInput
        id="name"
        label="Nome"
        placeholder="Digite seu nome "
        type={"text"}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}
