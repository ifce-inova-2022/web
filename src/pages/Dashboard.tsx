import { ChartLine } from "phosphor-react";
import { useState } from "react";
import { Diary } from "../components/consumption/Diary";
import { Monthly } from "../components/consumption/Monthly";
import { Yearly } from "../components/consumption/Yearly";
import { Header } from "../components/Header";

export function Dashboard() {
  const [category, setCategory] = useState<
    "Consumo Diário" | "Consumo Mensal" | "Consumo Anual" | string
  >("Consumo Diário");

  const categories = ["Consumo Diário", "Consumo Mensal", "Consumo Anual"];

  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 w-full flex sm:flex-row flex-col-reverse bg-zinc-300 rounded-tl-3xl relative">
          <aside className="sm:w-fit w-full bg-custom-green-default text-zinc-50 sm:relative fixed bottom-0">
            <h2 className="hidden sm:flex items-center gap-2 p-4 text-2xl font-semibold">
              <ChartLine />
              Gráficos
            </h2>
            <ul className="!cursor-pointer flex sm:flex-col flex-row overflow-visible">
              {categories.map((item) => {
                return (
                  <button
                    className={`sm:text-start text-center text-sm font-medium
                    
                    w-52 px-6 py-3  leading-5 bg-custom-green-default 


                     sm:focus:border-r-8 focus:border-r-0
                     sm:focus:border-b-0 focus:border-b-8 
                
                    ring-0 outline-none transition-all duration-300 ${
                      category === item
                        ? "bg-custom-green-hover shadow-md scale-[1.03]"
                        : "text-blue-100 hover:bg-custom-green-hover/10 hover:text-white"
                    }`}
                    key={item}
                    onClick={() => setCategory(item)}
                  >
                    <span>{item}</span>
                  </button>
                );
              })}
            </ul>
          </aside>

          <div className="w-full bg-zinc-50 flex-1">
            {category === "Consumo Diário" ? (
              <Diary />
            ) : category === "Consumo Mensal" ? (
              <Monthly />
            ) : category === "Consumo Anual" ? (
              <Yearly />
            ) : (
              ""
            )}
          </div>
        </main>
      </div>
    </>
  );
}
