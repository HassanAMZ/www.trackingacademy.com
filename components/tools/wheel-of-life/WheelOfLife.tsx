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
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";

ChartJS.register(
 RadialLinearScale,
 PointElement,
 LineElement,
 Filler,
 Tooltip,
 Legend
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
  <div className='flex flex-col items-center py-8 justify-center w-full'>
   <div className='flex flex-wrap justify-center'>
    {values.map((category, index) => (
     <div key={category.name} className='p-2'>
      <label className='text-xl font-bold   text-center'>{category.name}</label>
      <input
       type='range'
       min='0'
       max='10'
       value={category.value}
       onChange={(e) => handleChange(index, parseInt(e.target.value))}
       className='w-full bg-black h-2 rounded-lg appearance-none cursor-pointer'
      />
      <div className='text-center'>{category.value}</div>
     </div>
    ))}
   </div>
   <div className=' container-secondary flex items-center justify-center w-full h-full lg:w-1/2 lg:h-1/2 border-2 border-accent rounded-lg'>
    <Radar data={chartData} options={chartOptions} />
   </div>
  </div>
 );
};

export default WheelOfLife;
