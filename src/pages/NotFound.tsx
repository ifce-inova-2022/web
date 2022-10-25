import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">.: ERROR :.</h1>
      <h2 className="text-2xl font-semibold">Página não encontrada!</h2>
      <p className="text-xl font-semibold">
        Voltar para a{" "}
        <Link to="/" className="link underline">
          Home
        </Link>
      </p>
    </div>
  );
}
