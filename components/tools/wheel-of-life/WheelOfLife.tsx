"use client";
import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const WheelOfLife: React.FC = () => {
  const categories = [
    { name: "Body", value: 0 },
    { name: "Mind", value: 0 },
    { name: "Soul", value: 0 },
    { name: "Romance", value: 0 },
    { name: "Family", value: 0 },
    { name: "Friends", value: 0 },
    { name: "Mission", value: 0 },
    { name: "Money", value: 0 },
    { name: "Growth", value: 0 },
  ];

  const [values, setValues] = useState(categories);

  const handleChange = (index: number, newValue: number) => {
    const updatedValues = [...values];
    updatedValues[index].value = newValue;
    setValues(updatedValues);
  };

  const chartData = {
    labels: values.map((category) => category.name),
    datasets: [
      {
        label: "Life Areas",
        data: values.map((category) => category.value),
        backgroundColor: "rgba(11,20,140,0.4)",
        borderColor: "rgba(11,20,140,1)",
        color: "black",
        borderWidth: 4,
      },
    ],
  };
  const chartOptions = {
    scales: {
      r: {
        stepSize: 1,
        beginAtZero: true,
        min: 0,
        max: 10,

        ticks: {
          color: "#4D148C",
          backdropColor: "transparent",
          stepSize: 1,
          beginAtZero: true,
          min: 0,
          max: 10,
          font: {
            size: 14,
          },
        },
        pointLabels: {
          color: "black",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
      },
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center py-8">
      <div className="flex flex-wrap justify-center">
        {values.map((category, index) => (
          <div key={category.name} className="p-2">
            <label className="text-center text-xl font-bold">
              {category.name}
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={category.value}
              onChange={(e) => handleChange(index, parseInt(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-black"
            />
            <div className="text-center">{category.value}</div>
          </div>
        ))}
      </div>
      <div className="container-secondary flex h-full w-full items-center justify-center rounded-lg border-2 border-accent lg:h-1/2 lg:w-1/2">
        <Radar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default WheelOfLife;
