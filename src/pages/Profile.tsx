import { useState } from "react";
import { Button } from "../components/Button";
import { FieldInput } from "../components/FieldInput";
import { Header } from "../components/Header";

const user = {
  name: "Alexandre Gurgel",
  email: "xandongurgel@gmail.com",
  type: "admin",
  campus: "IFCE Aracati",
};

export function Profile() {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [type, setType] = useState(user.type);
  const [campus, setCampus] = useState(user.campus);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <>
      <Header />

      <main className="w-screen min-h-screen bg-zinc-100 p-6 flex flex-col items-center justify-center relative">
        {isOpenModal ? (
          <div className="top-0 w-full h-full card flex items-center justify-center absolute z-10 bg-zinc-50 shadow-lg">
            Modal
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="desktop:text-3xl tablet:text-3xl mobile:text-xl font-bold ">
            Configurações da conta
          </h1>
          <FieldInput
            type="text"
            id="name"
            label="Nome"
            placeholder="Insira seu nome completo"
            value={name}
            setValue={setName}
            isEditable={true}
          />
          <FieldInput
            type="text"
            id="email"
            label="Email"
            placeholder="exemplo@email.com"
            value={email}
            setValue={setEmail}
            isEditable={true}
          />
          <FieldInput
            type="text"
            id="campus"
            label="Campus"
            placeholder="Insira qual seu Campus"
            value={campus}
            setValue={setCampus}
            isEditable={true}
          />

          <div className="flex sm:flex-row flex-col gap-4 justify-between items-center">
            <Button
              title="Redefinir senha"
              type="button"
              onClick={() => setIsOpenModal(true)}
            />

            <Button title="Excluir conta" typeColor="secondary" />
          </div>
          <Button title="Confirmar alterações" />
        </form>
      </main>
    </>
  );
}
