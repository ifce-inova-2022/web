import { Button } from "../Button";
import { SectionDashboard } from "../SectionDashboard";

export function Monthly() {
  return (
    <SectionDashboard title="Consumo Mensal">
      <div className="flex mt-10">
        <span className="mr-9 text-xl font-bold">CAMPUS</span>
        <span className="text-xl">IFCE - CAMPUS ARACATI</span>
      </div>
      <div className="mt-8 flex flex-col">
        <span className="text-xl font-medium">Período</span>
        <span>Outubro de 2022</span>
      </div>
      <div className="mt-8">
        <span className="text-2xl font-bold">Gráfico de consumo mensal</span>
        <img className="h-72 mt-4" src="/chart-demanda-ativa.svg" alt="" />
      </div>
      <div className="flex flex-row justify-between">
        <Button typeColor="primary" sizeWidth="50%" title="Retornar período" />
        <Button typeColor="primary" sizeWidth="50%" title="Avançar período" />
      </div>
    </SectionDashboard>
  );
}
