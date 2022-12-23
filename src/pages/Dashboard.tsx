import { ChartLine } from "phosphor-react";
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
      <aside className="pt-36 bg-custom-green-default text-zinc-50 z-0">
        <h2 className="p-4 text-2xl font-semibold flex items-center gap-2">
          <ChartLine />
          Gráficos
        </h2>
        <ul className="!cursor-pointer flex flex-col overflow-visible">
          {categories.map((item) => {
            return (
              <button
                className={`text-start w-52 px-6 py-3 text-sm font-medium leading-5 bg-custom-green-default",
                "focus:border-b-0 focus:border-l-8 ring-0 outline-none transition-all duration-300 ${
                  category === item
                    ? "bg-custom-green-hover shadow-md scale-[1.03]"
                    : "text-blue-100 hover:bg-custom-green-hover/10 hover:text-white"
                }`}
                key={item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
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
