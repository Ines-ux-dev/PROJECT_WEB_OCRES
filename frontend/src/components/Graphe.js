import React, { Component } from 'react';
import '../graphe.css'
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,

} from "recharts";

const data = [
    {
        name: "09 h",
        uv1: 0,
    },
    {
        //name: "10 h",
        uv: 0,
    },
    {
        //name: "11 h",
        uv: 300,
    },
    {
        name: "12 h",
        uv: 465,

    },
    {
        //name: "13 h",
        uv: 600,

    },
    {
        //name: "14 h",
        uv: 700,


    },
    {
        name: "15 h",
        uv: 700,


    },
    {
        //name: "16 h",
        uv: 550,


    },
    {
        //name: "17 h",
        uv: 300,


    },
    {
        name: "18 h",
        uv: 0,


    },
    {
        //name: "19 h",
        uv: 0,


    },
    {
        //name: "20 h",
        uv: 0,
    },

    {
        name: "21 h",
        uv: 0,
    }
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label"></p>

                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};

export class Graphe extends Component {

    render() {
        return (
            <BarChart
                width={500}
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >

                <XAxis dataKey="name" />
                <Tooltip content={<CustomTooltip />} />

                <Bar dataKey="uv" fill="#82ca9d" />

            </BarChart>
        );
    }
}
//<Tooltip />
