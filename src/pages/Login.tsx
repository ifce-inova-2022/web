import { Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { FieldInput } from "../components/FieldInput";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen bg-zinc-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-zinc-800">Faça login</h1>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
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

        <FieldInput
          id="password"
          placeholder="***********"
          icon={<Lock />}
          label="Senha"
          type="password"
          value={password}
          setValue={setPassword}
          width="100%"
        />

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <span className="text-zinc-800 text-xs">
            Lembrar de mim por 30 dias
          </span>
        </label>

        <Button type="submit" className="mt-12" typeColor="primary" sizeWidth="100%" title="Entrar" />
      </form>
    </div>
  );
}
