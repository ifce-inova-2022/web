import { Button } from "../Button";
import { ChartMonthly } from "../charts/ChartMonthly";

import { SectionDashboard } from "../SectionDashboard";

export function Monthly() {
  return (
    <SectionDashboard title="Consumo Mensal">
      <div className="flex mt-6">
        <span className="mr-9 text-xl font-bold">CAMPUS</span>
        <span className="text-xl">IFCE - CAMPUS ARACATI</span>
      </div>
      <div className="mt-8 flex flex-col">
        <span className="text-xl font-medium">Período</span>
        <span>Outubro de 2022</span>
      </div>
      <div className="flex flex-col items-end">
        <div className="w-[26%] flex flex-row justify-between mt-4">
          <Button
            typeColor="primary"
            sizeWidth="50%"
            title="Retornar período"
          />
          <Button typeColor="primary" sizeWidth="50%" title="Avançar período" />
        </div>
      </div>
      <div className="mt-8">
        <span className="text-2xl font-bold">Gráfico de consumo mensal</span>
        <div className="px-20 py-4">
          <ChartMonthly />
        </div>
      </div>
    </SectionDashboard>
  );
}
