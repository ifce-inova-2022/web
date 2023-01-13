import { ReactNode } from "react";

interface SectionDashboardProps {
  title: string;
  children: ReactNode;
  campus: string;
  periodo: string; // mudar depois
}

export function SectionDashboard({ title, children, campus, periodo }: SectionDashboardProps) {
  return (
    <section className="flex-1 w-full min-h-screen flex flex-col sm:gap-6 gap-2 text-zinc-700 bg-zinc-100 sm:pb-0 pb-20 rounded-tl-md sm:rounded-tr-none rounded-tr-md sm:p-10 p-6 md:px-20 sm:px-10 px-4 ">
      <h1 className="sm:text-3xl text-2xl font-bold">{title}</h1>
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold">CAMPUS</span>
          <span className="">{campus}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-medium">Período</span>
          <span>{periodo}</span>
        </div>
      </div>
      {children}
    </section>
  );
}
