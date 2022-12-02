import { X } from "phosphor-react";

interface ModalProps {
  closeModal(): void;
}

export function Modal(props: ModalProps) {


  return (
    <div className="glass flex items-center justify-center top-0 right-0 w-screen h-screen absolute z-10">
      <div className="bg-zinc-50 w-[550px] h-[288px] shadow-md p-6 absolute">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Title</h1>
          <button className="top-3 right-3 hover:scale-110 transition-transform hover:bg-custom-red-hover hover:rounded-full p-1 hover:text-zinc-50 hover:shadow-md">
            <X onClick={props.closeModal} size={32} />
          </button>
        </div>
        <div className="flex flex-col mt-1">
          <h2 className="text-xl">14 de Outubro de 2022</h2>
          <h2 className="text-xl mt-4">Valores dos últimos 15 minutos</h2>
          <ul className="ml-4 mt-1 text-zinc-500">
              <li>- 15min: 10 kWh</li>
              <li>- 15min: 10 kWh</li>
              <li>- 15min: 10 kWh</li>
              <li>- 15min: 10 kWh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
