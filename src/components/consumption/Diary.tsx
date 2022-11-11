import { Button } from "../Button";
import { ChartDiary } from "../charts/ChartDiary";
import { SectionDashboard } from "../SectionDashboard";

export function Diary() {
  return (
    <SectionDashboard title="Consumo Diário">
      <div className="flex mt-10">
        <span className="mr-9 text-xl font-bold">CAMPUS</span>
        <span className="text-xl">IFCE - CAMPUS ARACATI</span>
      </div>
      <div className="mt-8 flex flex-col">
        <span className="text-xl font-medium">Período</span>
        <span>14 de outubro de 2022</span>
      </div>
      <div className="mt-8 flex flex-col">
        <span className="text-2xl font-bold">Gráfico de consumo diário</span>
        <ChartDiary />
      </div>
      <div className="flex flex-row justify-between">
        <Button typeColor="primary" sizeWidth="50%" title="Retornar período" />
        <Button typeColor="primary" sizeWidth="50%" title="Avançar período" />
      </div>
    </SectionDashboard>
  );
}
