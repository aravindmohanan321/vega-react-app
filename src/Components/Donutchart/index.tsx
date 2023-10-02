import { VegaLite, VisualizationSpec } from "react-vega";
import * as donutSpec from "./donutSpec.json";

export function Donutchart() {
  const donutData = {
    values: [
      { category: "Assembly", value: 4 },
      { category: "C++", value: 6 },
      { category: "Java", value: 10 },
      { category: "Javascript", value: 9 },
    ],
  };

  return (
    <VegaLite
      spec={donutSpec as VisualizationSpec}
      data={donutData}
      actions={false}
    />
  );
}
