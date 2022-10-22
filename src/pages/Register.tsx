import { Lock, User, Envelope, House } from "phosphor-react";
import { SetStateAction } from "react";
// import { Button } from "../components/Button";
import { useState } from "react";
import { FieldInput } from "../components/FieldInput";
import { Header } from "../components/Header"

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [password, setPassword] = useState("");
  return (
  <div className="w-screen h-screen bg-zinc-100 flex flex-col justify-center items-center">
    <Header></Header>
    
    <h1 className="text-2xl font-bold text-zinc-800">Cadastro de usuário</h1>

    <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
      <label htmlFor="name" className="flex flex-col gap-3">
        <FieldInput
          id="name"
          placeholder="Nome completo"
          icon={<User />}
          label="Name"
          type="text"
          value={name}
          setValue={setName}
        />
      </label>

      <label htmlFor="email" className="flex flex-col gap-3">
        <FieldInput
          id="email"
          placeholder="exemplo@email.com"
          icon={<Envelope />}
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
        />
      </label>

      <label htmlFor="campus" className="flex flex-col gap-3 w-[40%]">
        <FieldInput
          id="campus"
          placeholder="Campus"
          icon={<House />}
          label="Campus"
          type="text"
          value={campus}
          setValue={setCampus}
        />
      </label>

      <label htmlFor="admin" className="flex flex-col gap-3 w-[40%]">
        Admin:radio
      </label>

      <label htmlFor="password" className="flex flex-col gap-3">
        <FieldInput
          id="password"
          placeholder="********"
          icon={<Lock />}
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
      </label>

      <label htmlFor="password-confirmation" className="flex flex-col gap-3">
        <FieldInput
          id="password-confirmation"
          placeholder="********"
          icon={<Lock />}
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
      </label>
      {/* <Button type="submit" className="" typeButton="" title="Criar conta">
          
        </Button> */}
    </form>
  </div>
  );
}
