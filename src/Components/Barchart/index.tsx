import { VegaLite, VisualizationSpec } from "react-vega";
import * as barchartSpe from "./barchartSpec.json";

export function Barchart() {
  const barChartData = {
    values: [
      { a: "A", b: 28 },
      { a: "B", b: 55 },
      { a: "C", b: 43 },
      { a: "D", b: 60 },
      { a: "E", b: 33 },
    ],
  };
  return (
    <VegaLite
      spec={barchartSpe as VisualizationSpec}
      data={barChartData}
      actions={false}
      width={400}
      height={300}
      hover={true}
      tooltip={{ theme: "light" }}
    />
  );
}
