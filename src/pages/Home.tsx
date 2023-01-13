import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const lastSevenDays = [
  "SEX (7/10) - R$ 100,00",
  "SÁB (8/10) - R$ 100,00",
  "DOM (9/10) - R$ 100,00",
  "SEG (10/10) - R$ 100,00",
  "TER (11/10) - R$ 100,00",
  "QUA (12/10) - R$ 100,00",
  "QUI (13/10) - R$ 100,00",
];

export function Home() {
  const [statusConsumer, setStatusConsumer] = useState("baixo");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value <= 50) setStatusConsumer("baixo");
    else if (value > 50 && value < 70) setStatusConsumer("moderado");
    else if (value >= 70) setStatusConsumer("alto");
  }, [value]);

  const styleStatusConsumer =
    statusConsumer === "baixo"
      ? "bg-custom-green-default text-zinc-50"
      : statusConsumer === "moderado"
      ? "bg-custom-yellow-hover text-zinc-900"
      : "bg-custom-red-default text-zinc-50";

  return (
    <main
      className={`${styleStatusConsumer} w-screen h-screen flex items-center justify-center transition-colors duration-[3s]`}
    >
      <div className="absolute top-9 right-5 z-30">
        <input
          type="range"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          min={0}
          max={100.0}
        />
      </div>
      <section className="flex flex-col items-center gap-4 drop-shadow-lg">
        <h1 className="text-3xl font-semibold">Valor gasto hoje</h1>
        <p className="md:text-9xl text-6xl font-semibold transition-all">
          R$ {value},00
        </p>
        <span className="text-xl uppercase font-bold">
          Consumo {statusConsumer}
        </span>
      </section>
      <footer className="w-full absolute bottom-0 left-0 flex flex-col mobile:gap-4 gap-2">
        <div className="flex-1 flex mobile:flex-row flex-col-reverse justify-between items-end mobile:gap-0 gap-4 mobile:px-10 px-4">
          <span className="text-xl font-medium">Últimos 7 dias</span>
          <Link
            to="/dashboard"
            className="text-center flex items-center justify-center bg-zinc-900 text-zinc-100 py-2 px-6 rounded-md shadow-lg hover:shadow-sm hover:bg-zinc-800 hover:translate-y-0.5 focus:bg-zinc-800 transition-all"
          >
            Acessar dashboard
          </Link>
        </div>

        <div
          className="flex flex-nowrap gap-6
        py-4 px-1 rounded-t-3xl border-t-4
        bg-zinc-50/10 border-zinc-50/20 overflow-hidden whitespace-nowrap"
        >
          <AliceCarousel
            animationDuration={20000}
            autoPlayInterval={1}
            autoPlay={true}
            autoWidth={true}
            autoHeight={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            animationEasingFunction={"linear"}
            infinite={true}
            disableSlideInfo={true}
            items={lastSevenDays.map((item) => (
              <p className="whitespace-nowrap w-fit px-6">{item}</p>
            ))}
          />
        </div>
      </footer>
    </main>
  );
}
