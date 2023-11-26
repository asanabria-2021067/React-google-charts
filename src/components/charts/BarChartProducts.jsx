import React from "react";
import { Chart } from "react-google-charts";
import { Productos } from "../../db/Productos";

export const options = {
  chart: {
    title: "Products and price",
  },
};

const formattedData = [["Product", "Price"], ...Productos.map(producto => [producto.nombre, producto.precio])];
export default function BarChartProduct() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={formattedData}
      options={options}
    />
  );
}
