import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { User, UserCircle, X } from "phosphor-react";
import { AuthContext } from "../contexts/Auth/authContext";
import { toast } from "react-toastify";

export function Header() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [user, setUser] = useState<undefined | { name: string; type: string }>({
    name: "Alexandre",
    type: "admin",
  });
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSingUp() {
    setUser(undefined);
    setIsOpenModal(false);
    handleLogout()
    toast.success("Deslogado");
  }

  const handleLogout = async () => {
    await auth.signout()
    navigate('/')
  }

  return (
    <header className="bg-custom-green-default w-full flex justify-between items-center p-6 z-10">
      <div className="relative">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      {auth.user ? (
        <div className="relative">
          <button
            className="rounded-full shadow-md hover:shadow-lg shadow-zinc-600/60 hover:shadow-zinc-600/60 hover:scale-110 transition-all outline-none bg-zinc-50"
            // onClick={() => setIsOpenMenu(!isOpenMenu)}
            onMouseEnter={() => setIsOpenMenu(true)}
          >
            <UserCircle size={28} weight={"fill"} />
          </button>
          {isOpenMenu ? (
            <nav
              className="min-w-[10rem] w-max bg-zinc-50 border-2 border-zinc-100 top-8 right-0 p-6 rounded shadow-lg shadow-zinc-700/10 absolute z-20"
              onMouseLeave={() => setIsOpenMenu(false)}
            >
              <ul className="flex flex-col items-start gap-2">
                <li>{`Olá, ${auth.user?.name}`}</li>
                <hr />
                <li>
                  {" "}
                  <Link className="link" to="/profile">
                    Conta
                  </Link>
                </li>
                <li>
                  {" "}
                  {auth.user?.type === "admin" ? (
                    <Link className="link" to="register">
                      Criar usuário
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <button onClick={() => setIsOpenModal(true)} className="link">
                    Sair
                  </button>
                </li>
              </ul>
            </nav>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
        // <Link to="login">Entrar</Link>
      )}
      {isOpenModal ? (
        <div className="glass flex items-center justify-center top-0 right-0 w-screen min-h-screen fixed z-10">
          <button
            onClick={() => setIsOpenModal(false)}
            className="w-full h-full z-0 absolute top-0 left-0 cursor-default"
          ></button>

          <div className=" bg-zinc-50 p-10 shadow-2xl border-2 rounded-lg relative">
            <button className="absolute top-3 right-3 hover:scale-110 transition-transform hover:bg-custom-red-hover hover:rounded-full p-1 hover:text-zinc-50 hover:shadow-md">
              <X weight="bold" onClick={() => setIsOpenModal(false)} />
            </button>

            <p className="mb-6">Tem certeza que deseja sair?</p>

            <div className="flex justify-between gap-4">
              <button
                className="w-1/2 px-4 py-1 border-2 border-custom-red-hover hover:border-custom-red-default rounded hover:bg-custom-red-hover hover:text-zinc-50 transition-colors"
                onClick={() => setIsOpenModal(false)}
              >
                Cancelar
              </button>

              <button
                className="w-1/2 px-4 py-1 border-2 
                border-custom-green-hover hover:border-custom-green-default rounded hover:bg-custom-green-hover hover:text-zinc-50 transition-colors"
                onClick={handleSingUp}
              >
                Sair
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
