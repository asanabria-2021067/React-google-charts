import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "react", "angular"],
    ["2014", 80, 70],
    ["2015", 90, 50],
    ["2016", 75, 80],
    ["2017", 78, 90],
];

export const options = {
    chart: {
        title: "Estdistica Cursos Intecap",
        subtitle: " React, Angular: 2014-2017",
    },
    colors: ['#b0120a', '#ffab91'],
    bars: "vertical",
    vAxis: { format: "decimal" },
    height: 300,
    width: 450,
    // axes: {
    //     y: {
    //         all: {
    //             range: {
    //                 max: 100,
    //                 min: 0,
    //             },
    //         },
    //     },
    // },

    legend: { position: "top", maxLines: 3 },
    bar: { groupWidth: "75%" },


};

export default function BarChartCurso() {
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
