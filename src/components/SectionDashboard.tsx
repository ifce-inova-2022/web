import { ReactNode } from "react";

interface SectionDashboardProps {
  title: string;
  children: ReactNode;
}

export function SectionDashboard({ title, children }: SectionDashboardProps) {
  return (
    <section className="flex-1 sm:p-10 p-4 text-zinc-700 bg-zinc-100 overflow-auto">
      <h1 className="desktop:text-3xl tablet:text-2xl mobile:text-xl font-bold">{title}</h1>
      {children}
    </section>
  );
}
