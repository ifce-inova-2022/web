import { Lock, User, Envelope, House } from "phosphor-react";
import { FormEventHandler, useState } from "react";
import { Button } from "../components/Button";
import { FieldInput } from "../components/FieldInput";
import { RadioButton, RadioOption } from "../components/RadioButton";
import { toast } from "react-toastify";
import { Header } from "../components/Header";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!name || !email || !campus || !password || !passwordCheck) {
      setError("Todos os campos são obrigatórios");
      return toast.warn("Campos obrigatórios");
    }

    if (password.length < 8) {
      setError("A deve conter no mínimo 8 caracteres");
      return toast.warn("Senha inválida");
    }
    if (password !== passwordCheck) {
      setError("As senhas não coincidem");
      return toast.warn("As senhas devem ser iguais");
    }

    setError("");

    try {
      toast.success("Deu certo");
    } catch (error: any) {
      toast.error(`Ops... ${error}`);
    }
  }

  return (
    <>
      <Header />
      <main className="w-full min-h-screen sm:p-20 p-6 bg-zinc-100 flex justify-center overflow-x-hidden">
        <form
          onSubmit={handleSubmit}
          className="max-w-full flex flex-col items-center gap-4
        "
        >
          <h1 className="desktop:text-3xl tablet:text-3xl mobile:text-2xl p-2 font-bold">
            Cadastro de usuário
          </h1>
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
      </main>
    </>
  );
}
