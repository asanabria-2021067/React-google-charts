import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Alumno", "2022", "2023"],
    ["Juan", 80, 75],
    ["Marcos", 90, 45],
    ["Raul", 100, 23],
    ["Antonio", 65, 89],
];


export const options = {
    chart: {
        title: "Nota finales de Programación",
        subtitle: "Curso React Interfaces Usuario 2022 -2023",
    },
};

export default function BarChart2() {
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
