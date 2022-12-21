interface ChartTitleProps {
    type: string;
}
export function ChartTitle({type}: ChartTitleProps) {
    return (
        <span className="desktop:text-2xl tablet:text-xl mobile:text-sm font-bold">Gráfico de consumo {type}</span>
    )
}