import { VegaLite, VisualizationSpec } from "react-vega";
import * as areaChartSpec from "./areaChartSpec.json";

export function Areachart() {
  const areaChartData = {
    values: [
      {
        symbol: "GOOG",
        date: "21-09-1995",
        price: 102.37,
        price_start: "0",
        price_end: "102.37",
      },
      {
        symbol: "GOOG",
        date: "25-02-2000",
        price: 129.6,
        price_start: "0",
        price_end: "129.6",
      },
      {
        symbol: "GOOG",
        date: "20-01-1997",
        price: 190.64,
        price_start: "0",
        price_end: "190.64",
      },
      {
        symbol: "GOOG",
        date: "16-09-1998",
        price: 181.98,
        price_start: "0",
        price_end: "181.98",
      },
      {
        symbol: "GOOG",
        date: "26-09-1999",
        price: 192.79,
        price_start: "0",
        price_end: "192.79",
      },
      {
        symbol: "GOOG",
        date: "21-09-2000",
        price: 300.62,
        price_start: "0",
        price_end: "300.62",
      },
      {
        symbol: "GOOG",
        date: "18-09-2001",
        price: 102.37,
        price_start: "0",
        price_end: "187.99",
      },
      {
        symbol: "GOOG",
        date: "30-09-2002",
        price: 150.37,
        price_start: "0",
        price_end: "150.37",
      },
      {
        symbol: "GOOG",
        date: "31-09-2003",
        price: 320.37,
        price_start: "0",
        price_end: "320.37",
      },
      {
        symbol: "GOOG",
        date: "01-09-1995",
        price: 500.37,
        price_start: "0",
        price_end: "500.37",
      },
    ],
  };
  
  return (
    <VegaLite
      spec={areaChartSpec as VisualizationSpec}
      data={areaChartData}
      actions={false}
      hover={true}
      tooltip={{ theme: "light" }}
    />
  );
}
