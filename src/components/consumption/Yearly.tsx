import { Button } from "../Button";
import { ChartYearly } from "../charts/ChartYearly";
import { SectionDashboard } from "../SectionDashboard";

export function Yearly() {
  return (
    <SectionDashboard title="Consumo Anual">
      <div className="flex gap-6 mt-6">
        <span className="text-xl font-bold">CAMPUS</span>
        <span className="text-xl">IFCE - CAMPUS ARACATI</span>
      </div>

      <div className="mt-8 flex flex-col">
        <span className="text-xl font-medium">Período</span>
        <span>2022</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold">Gráfico de consumo anual</span>

        <div className="flex gap-2">
          <Button
            typeColor="primary"
            sizeWidth="50%"
            title="Retornar período"
          />
          <Button typeColor="primary" sizeWidth="50%" title="Avançar período" />
        </div>
      </div>

      <div className="mt-6 px-20 py-4">
        <ChartYearly />
      </div>
    </SectionDashboard>
  );
}
