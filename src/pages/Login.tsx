import { Envelope, Lock } from "phosphor-react";
import { useContext, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { FieldInput } from "../components/FieldInput";
import { toast } from "react-toastify"
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos os campos são obrigatórios");
      return toast.warn("Campos obrigatórios");
    }

    if (password.length < 8) {
      setError("A deve conter no mínimo 8 caracteres");
      return toast.warn("Senha inválida");
    }

    setError("");

    (async () => {
      try {
        if (email && password) {
          const isLogged = await auth.signin(email, password)
          if (isLogged) {
            navigate('/dashboard')
          }
        }
      } catch (error: any) {
        toast.error(`Ops... ${error}`);
      }
    })();
  }

  return (
    <div className="w-screen h-screen bg-zinc-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-zinc-800">Faça login</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
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
