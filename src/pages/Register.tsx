import { Lock, User, Envelope, House } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { FieldInput } from "../components/FieldInput";
import { RadioButton, RadioOption } from "../components/RadioButton";
import { toast } from "react-toastify";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !email || !campus || !password || !passwordCheck)
      return toast.warn("Campos obrigatórios");

    if (password.length < 8) return toast.warn("Senha inválida");

    if (password !== passwordCheck)
      return toast.warn("As senhas devem ser iguais");

    toast.dismiss();

    (async () => {
      try {
        toast.success("Deu certo");
      } catch (error: any) {
        toast.error(`Ops... ${error}`);
      }
    })();
  }

  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
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

        <div className="flex w-full ">
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

          <div className="ml-[20px]">
            <RadioButton
              id="isAdmin"
              label="Administrador"
              name="isAdmin"
              required
              value={admin}
              setValue={setAdmin}
            >
              <RadioOption value="isNotAdmin">Não</RadioOption>
              <RadioOption value="isAdmin">Sim</RadioOption>
            </RadioButton>
          </div>
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
          value={passwordCheck}
          setValue={setPasswordCheck}
          width="100%"
        />
        <Button
          type="submit"
          typeColor="primary"
          title="Criar conta"
          sizeWidth="100%"
        />
      </form>
    </div>
  );
}
