import { ReactNode } from "react";

interface SectionDashboardProps {
  title: string;
  children: ReactNode;
}

export function SectionDashboard({ title, children }: SectionDashboardProps) {
  return (
    <section className="flex-1 sm:p-6 p-2 text-zinc-700 bg-zinc-100">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </section>
  );
}
