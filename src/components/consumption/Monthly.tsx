import { Button } from "../Button";
import { ChartMonthly } from "../charts/ChartMonthly";

import { SectionDashboard } from "../SectionDashboard";

export function Monthly() {
  return (
    <SectionDashboard
      title="Gráfico de consumo mensal"
      campus="IFCE - CAMPUS ARACATI"
      periodo="Outubro de 2022"
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
        <ChartMonthly />
      </div>
    </SectionDashboard>
  );
}
