import { useState } from "react";
import { Button } from "../Button";
import { ChartDiary } from "../charts/ChartDiary";
import { Modal } from "../Modal";
import { SectionDashboard } from "../SectionDashboard";

export function Diary() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <SectionDashboard title="Gráfico de consumo diário">
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold">CAMPUS</span>
          <span className="text-xl">IFCE - CAMPUS ARACATI</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-medium">Período</span>
          <span>14 de outubro de 2022</span>
        </div>
      </div>

      <div className="w-full flex justify-end gap-4">
        <div>
          <Button typeColor="primary" title="Retornar período" />
        </div>

        <div>
          <Button typeColor="primary" title="Avançar período" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <ChartDiary />
      </div>
    </SectionDashboard>
  );
}
