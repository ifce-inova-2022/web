import { Button } from "../Button";
import { ChartYearly } from "../charts/ChartYearly";
import { ChartTitle } from "../ChartTitle";
import { InforHeader } from "../InfoHeader";
import { SectionDashboard } from "../SectionDashboard";

export function Yearly() {
  return (
    <SectionDashboard title="Consumo Anual">
      <InforHeader campus="IFCE - CAMPUS ARACATI" periodo="2022" />

      <div className="flex justify-between items-center mt-4 desktop:flex-row tablet:flex-row mobile:flex-col">
        <ChartTitle type="anual" />

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
