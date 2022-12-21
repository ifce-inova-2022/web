interface InfoHeaderProps {
    campus: string;
    periodo: string; // mudar para data
}
export function InforHeader({campus, periodo}: InfoHeaderProps) {
  return (
    <>
      <div className="desktop:text-xl desktop:flex-row tablet:text-xl mobile:flex-col flex mt-6">
        <span className="font-bold mr-6">CAMPUS</span>
        <span className="">{campus}</span>
      </div>

      <div className="mt-8 flex flex-col">
        <span className="text-xl font-medium">Período</span>
        <span>{periodo}</span>
      </div>
    </>
  );
}
