import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function PopulationChart() {
  const [apiData, setApiData] = useState([]);
  const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data.data);
      console.log(data.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const chartData = [
    ["Año", "Población"],
    ...apiData.map((item) => [item.Year, item.Population]), // ... es un spread operator que permite expandir un array
  ];


  const options = {
    title: "Crecimiento de Población en Estados Unidos",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Crecimiento en la Población",
      minValue: 0,
    },
    vAxis: {
      title: "Años",
    },
    // colores degadados
    colors: ["green", "red"],
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="270px"
      data={chartData}
      options={options}
    />
  );
}
