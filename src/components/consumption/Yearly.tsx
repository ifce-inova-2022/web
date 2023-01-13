import { Button } from "../Button";
import { ChartYearly } from "../charts/ChartYearly";
import { SectionDashboard } from "../SectionDashboard";

export function Yearly() {
  return (
    <SectionDashboard
      title="Gráfico de consumo anual"
      campus="IFCE - CAMPUS ARACATI"
      periodo="2022"
    >
      <div className="w-full flex justify-end gap-4">
        <div>
          <Button typeColor="primary" title="Retornar período" />
        </div>

        <div>
          <Button typeColor="primary" title="Avançar período" />
        </div>
      </div>

      <div className="mt-6 px-20 py-4">
        <ChartYearly />
      </div>
    </SectionDashboard>
  );
}
