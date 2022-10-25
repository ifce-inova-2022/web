import { ChartLine, TrendDown } from "phosphor-react";
import { useState } from "react";
import { Diary } from "../components/consumption/Diary";
import { Monthly } from "../components/consumption/Monthly";
import { Yearly } from "../components/consumption/Yearly";

export function Dashboard() {
  const [category, setCategory] = useState<
    "Consumo Diário" | "Consumo Mensal" | "Consumo Anual" | string
  >("Consumo Diário");

  const categories = ["Consumo Diário", "Consumo Mensal", "Consumo Anual"];

  return (
    <main className="w-screen h-screen flex bg-zinc-300">
      <aside className="pt-36 bg-custom-green-default text-zinc-50">
        <h2 className="p-4 text-2xl font-semibold flex items-center gap-2">
          <ChartLine />
          Gráficos
        </h2>
        <ul className="!cursor-pointer">
          {categories.map((item) => {
            return (
              <li
                className={`w-52 sm:px-6 px-2 py-2.5 text-sm font-medium leading-5 bg-custom-green-default",
              "ring-zinc-700 ring-opacity-60 ring-offset-2 ring-offset-custom-green-hover focus:outline-none focus:ring-2 transition-colors duration-300 ${
                category === item
                  ? "bg-custom-green-hover shadow"
                  : "text-blue-100 hover:bg-custom-green-hover/10 hover:text-white"
              }`}
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </aside>

      {category === "Consumo Diário" ? (
        <Diary />
      ) : category === "Consumo Mensal" ? (
        <Monthly />
      ) : category === "Consumo Anual" ? (
        <Yearly />
      ) : (
        ""
      )}
    </main>
  );
}
