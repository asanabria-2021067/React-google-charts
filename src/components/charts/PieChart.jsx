import React from 'react'
import Chart from 'react-google-charts';
import { Productos } from '../../db/Productos';

export const options = {
  title: "Comparativa de costos por productos",
  is3D: true,
};

const formattedData = [["Product", "Price"], ...Productos.map(producto => [producto.nombre, producto.precio])];
export default function PieChart() {
  return (
    <div>
    <Chart
      chartType="PieChart"
      data={formattedData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}
