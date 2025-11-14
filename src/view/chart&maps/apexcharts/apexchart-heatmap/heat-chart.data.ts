//Basic Chart

import { getColorCodes } from "@/utils/reusable-functions";

// Utility Function to Generate Data
function generateData(count: number, yrange: { min: number; max: number }) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  );
}
const basicChart = {
  series: [
    { name: "Metric1", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric2", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric3", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric4", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric5", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric6", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric7", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric8", data: generateData(18, { min: 0, max: 90 }) },
    { name: "Metric9", data: generateData(18, { min: 0, max: 90 }) },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: getColorCodes(["bg-primary-500"]), // Example single color, replace as needed
    title: {
      text: "HeatMap Chart (Single Color)",
    },
    xaxis: {
      tickAmount: 16,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};

//Multiple Colors Chart
const multipleColorChart = {
  series: [
    { name: "PE1", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE2", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE3", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE4", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE5", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE6", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE7", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE8", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE9", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE10", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE11", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE12", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE13", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE14", data: generateData(8, { min: 0, max: 90 }) },
    { name: "PE15", data: generateData(8, { min: 0, max: 90 }) },
  ],
  // Chart options
  chartOptions: {
    chart: {
      height: 300,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#F0FF33",
      "#FF33F4",
      "#33FFF0",
      "#F0F033",
      "#57FF33",
    ], // Add your desired colors here
    xaxis: {
      type: "category",
      categories: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30",
      ],
    },
    title: {
      text: "HeatMap Chart (Different color shades for each series)",
    },
    grid: {
      padding: {
        right: 20,
      },
    },
  },
};
//Multiple Colors Flipped
const multipleColorFlippedChart = {
  series: [
    { name: "Jan", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Feb", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Mar", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Apr", data: generateData(20, { min: -30, max: 55 }) },
    { name: "May", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Jun", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Jul", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Aug", data: generateData(20, { min: -30, max: 55 }) },
    { name: "Sep", data: generateData(20, { min: -30, max: 55 }) },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          inverse: true, // Flipping the color scale vertically
        },
      },
    },
    colors: [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#F0FF33",
      "#FF33F4",
      "#33FFF0",
      "#F0F033",
      "#57FF33",
      "#3377FF",
    ], // Define your colors here
    xaxis: {
      type: "category",
      categories: [
        "P1",
        "P2",
        "P3",
        "P4",
        "P5",
        "P6",
        "P7",
        "P8",
        "P9",
        "P10",
        "P11",
        "P12",
        "P13",
        "P14",
        "P15",
        "P16",
        "P17",
        "P18",
        "P19",
        "P20",
      ],
    },
    title: {
      text: "Color Scales Flipped Vertically",
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  },
};

//Rounded
const RoundedChart = {
  series: [
    { name: "Metric1", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric2", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric3", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric4", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric5", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric6", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric7", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric8", data: generateData(20, { min: 0, max: 90 }) },
    { name: "Metric9", data: generateData(20, { min: 0, max: 90 }) },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "heatmap",
    },
    stroke: {
      width: 0, // No stroke around the blocks
    },
    plotOptions: {
      heatmap: {
        radius: 30, // Rounded corners
        enableShades: false, // Disable shades for uniform colors
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: "#008FFB", // Blue for lower range
            },
            {
              from: 51,
              to: 100,
              color: "#00E396", // Green for higher range
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"], // White text inside the blocks
      },
    },
    colors: ["#008FFB", "#00E396"], // Custom color codes
    xaxis: {
      tickAmount: 18,
      type: "category",
    },
    title: {
      text: "Rounded (Range without Shades)",
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};
export {
  basicChart,
  multipleColorChart,
  multipleColorFlippedChart,
  RoundedChart,
};
