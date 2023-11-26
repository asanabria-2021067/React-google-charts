import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Productos } from "../../db/Productos";

const ProductosConCountry = Productos.map(producto => ({ ...producto, country: producto.country || "Unknown" }));

const formattedData = [
  ["Country", "Product", "Cost"],
  ...ProductosConCountry.map(producto => [producto.country, producto.nombre, producto.precio]),
];

export default function GeoChartProduct() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = ({ chartWrapper }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (selection.length === 0) {
      setSelectedProduct(null);
      return;
    }
    const product = formattedData[selection[0].row + 1];
    setSelectedProduct(product[1]);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: handleSelect,
              },
            ]}
            chartType="GeoChart"
            width="95%"
            height="290px"
            data={formattedData}
            options={{
              region: "world",
              displayMode: "regions",
              colorAxis: { colors: ["green", "lightgreen", "darkgreen"] },
              backgroundColor: "#81d4fa",
              datalessRegionColor: "gray",
              defaultColor: "#f5f5f5",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2 style={{marginLeft:"20vh"}}>Product List</h2>
          <ul style={{ height: "30vh", overflow: "scroll" }}>
            {ProductosConCountry.map(producto => (
              <li key={producto.id}>
                {producto.nombre} - {producto.country}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Selected Product: {selectedProduct || "None"}</h2>
      </div>
    </div>
  );
}
