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
        name: "10 h",
        uv: 0,
    },
    {
        name: "11 h",
        uv: 300,
    },
    {
        name: "12 h",
        uv: 465,

    },
    {
        name: "13 h",
        uv: 600,

    },
    {
        name: "14 h",
        uv: 700,


    },
    {
        name: "15 h",
        uv: 700,


    },
    {
        name: "16 h",
        uv: 550,


    },
    {
        name: "17 h",
        uv: 300,


    },
    {
        name: "18 h",
        uv: 0,


    },
    {
        name: "19 h",
        uv: 0,


    },
    {
        name: "20 h",
        uv: 0,
    },

    {
        name: "21 h",
        uv: 0,
    }
];

const getIntroOfPage = (label) => {
    if (label === "11 h") {
        return "11 h : Généralement peu fréquenté";
    } if (label === "12 h") {
        return "12 h : Généralement assez fréquenté";
    } if (label === "13 h") {
        return "13 h : Généralement assez fréquenté";
    } if (label === "14 h") {
        return '14 h : Généralement assez fréquenté';
    } if (label === "15 h") {
        return '15 h : Généralement assez fréquenté';
    } if (label === "16 h") {
        return '16 h : Généralement assez fréquenté';
    } if (label === "17 h") {
        return '17 h : Généralement peu fréquenté';
    }
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">

                <p className="intro">{getIntroOfPage(label)}</p>

            </div>
        );
    }

    return null;
};



export class Graphe extends Component {

    render() {
        return (


            <BarChart

                width={800}
                height={800}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >

                <Tooltip className="indications" content={<CustomTooltip />} />
                <XAxis dataKey="name" />


                <Bar dataKey="uv" barSize={30} radius={20} fill="#83b0da" bottom={20} />

            </BarChart>
        );
    }
}
//<Tooltip />
