import { Lock, User, Envelope, House } from "phosphor-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { FieldInput } from "../components/FieldInput";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col items-center">
      <form
        className="w-[400px] flex-1
        flex flex-col gap-4 items-center sm:px-6 px-3 md:py-32 py-24
        "
      >
        <h1 className="text-3xl p-2 font-bold">Cadastro de usuário</h1>
        <FieldInput
          id="name"
          placeholder="Nome completo"
          icon={<User />}
          label="Name"
          type="text"
          value={name}
          setValue={setName}
          width="100%"
        />

        <FieldInput
          id="email"
          placeholder="exemplo@email.com"
          icon={<Envelope />}
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          width="100%"
        />

        <div className="flex w-full">
          <FieldInput
            id="campus"
            placeholder="Campus"
            icon={<House />}
            label="Campus"
            type="text"
            value={campus}
            setValue={setCampus}
            width="50%"
          />
          <label htmlFor="admin" className="flex flex-col gap-3 w-[50%]">
            Admin:radio
          </label>
        </div>

        <FieldInput
          id="password"
          placeholder="********"
          icon={<Lock />}
          label="Senha"
          type="password"
          value={password}
          setValue={setPassword}
          width="100%"
        />

        <FieldInput
          id="password-confirmation"
          placeholder="********"
          icon={<Lock />}
          label="Confirmar senha"
          type="password"
          value={password}
          setValue={setPassword}
          width="100%"
        />
          <Button type="submit" typeColor="primary" title="Criar conta" />
      </form>
    </div>
  );
}
