import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle, X } from "phosphor-react";

export function Header() {
  const [user, setUser] = useState<undefined | { name: string; type: string }>({
    name: "Alexandre",
    type: "admin",
  });
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSingUp() {
    setUser(undefined);
    setIsOpenModal(false);
  }

  return (
    <header className="absolute top-0 w-screen flex justify-between items-center p-6 z-10">
      <div className="h-10 relative">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      {user ? (
        <div className="relative">
          <button
            className="outline-none"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <UserCircle
              size={28}
              weight={"regular"}
              className="bg-zinc-50 rounded-full hover:scale-110"
            />
          </button>
          {isOpenMenu ? (
            <div
              className="min-w-[10rem] w-max bg-zinc-50 border-2 border-zinc-100 right-0 p-6 flex flex-col items-center gap-2 rounded shadow-lg shadow-zinc-700/10 absolute"
              onMouseLeave={() => setIsOpenMenu(false)}
            >
              <div>{`Olá, ${user.name}`}</div>
              <hr />
              <Link className="link" to="profile">
                Conta
              </Link>

              {user.type === "admin" ? (
                <Link className="link" to="register">
                  Criar usuário
                </Link>
              ) : (
                ""
              )}
              <button onClick={() => setIsOpenModal(true)} className="link">
                Sair
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
        // <Link to="login">Entrar</Link>
      )}
      {isOpenModal ? (
        <div className="card flex items-center justify-center top-0 right-0 w-screen h-screen absolute z-50">
          <div className=" bg-zinc-50 p-10 rounded relative">
            <button className="absolute top-3 right-4 hover:scale-110 transition-transform">
              <X weight="bold" onClick={() => setIsOpenModal(false)} />
            </button>
            <p className="mb-6">Tem certeza que deseja sair?</p>

            <div className="flex justify-between gap-4">
              <button
                className="w-1/2 px-4 py-1 border-2 border-custom-green-default rounded hover:bg-custom-green-hover hover:text-zinc-50 transition-colors"
                onClick={handleSingUp}
              >
                Sair
              </button>

              <button
                className="w-1/2 px-4 py-1 border-2 border-custom-red-default rounded hover:bg-custom-red-hover hover:text-zinc-50 transition-colors"
                onClick={() => setIsOpenModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
