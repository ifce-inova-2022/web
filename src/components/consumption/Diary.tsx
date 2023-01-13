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
    <SectionDashboard
      title="Gráfico de consumo diário"
      campus="IFCE - CAMPUS ARACATI"
      periodo="14 de Outubro de 2022"
    >
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
