import { Lock, User, Envelope, House } from "phosphor-react";
// import { Button } from "../components/Button";
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
        flex flex-col gap-4 items-stretch sm:px-6 px-3 md:py-32 py-24
        "
      >
        <h1 className="text-2xl p-2 font-bold">Cadastro de usuário</h1>
        <FieldInput
          id="name"
          placeholder="Nome completo"
          icon={<User />}
          label="Name"
          type="text"
          value={name}
          setValue={setName}
        />

        <FieldInput
          id="email"
          placeholder="exemplo@email.com"
          icon={<Envelope />}
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
        />

        <FieldInput
          id="campus"
          placeholder="Campus"
          icon={<House />}
          label="Campus"
          type="text"
          value={campus}
          setValue={setCampus}
        />

        <label htmlFor="admin" className="flex flex-col gap-3 w-[40%]">
          Admin:radio
        </label>

        <FieldInput
          id="password"
          placeholder="********"
          icon={<Lock />}
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <FieldInput
          id="password-confirmation"
          placeholder="********"
          icon={<Lock />}
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <Button type="submit" className="" typeButton="" title="Criar conta" />
      </form>
    </div>
  );
}
