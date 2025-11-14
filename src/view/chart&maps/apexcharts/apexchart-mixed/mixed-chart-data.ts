import { getColorCodes } from "@/utils/reusable-functions";

//line column Chart
const lineColumnChart = () => {
  return {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    chartOptions: {
      chart: {
        height: 300,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      colors: getColorCodes(["bg-primary-500", "bg-green-500"]), // Replace with dynamic colors if necessary
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          tickAmount: 8,
          title: {
            text: "Website Blog",
          },
        },
        {
          tickAmount: 9,
          opposite: true,
          title: {
            text: "Social Media",
          },
        },
      ],
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
        },
      },
    },
  };
};

//line Area Chart
const areaChart = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "line",
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: [
      "Dec 01",
      "Dec 02",
      "Dec 03",
      "Dec 04",
      "Dec 05",
      "Dec 06",
      "Dec 07",
      "Dec 08",
      "Dec 09",
      "Dec 10",
      "Dec 11",
    ],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: "Series A",
        },
      },
      {
        opposite: true,
        title: {
          text: "Series B",
        },
      },
    ],
    colors: ["#0EA5E9", "#22C55E"], // Set colors here (or use dynamic colors if needed)
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: number) =>
          typeof y !== "undefined" ? `${y.toFixed(0)} points` : y,
      },
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

//Line Column Area Chart
const columnAreaChart = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "TEAM C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    colors: ["#007bff", "#28a745", "#f8c92d"], // Set colors here (you can adjust as needed)
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tickAmount: 7,
      title: {
        text: "Points",
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: number) =>
          typeof y !== "undefined" ? `${y.toFixed(0)} points` : y,
      },
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

//Line Scatter Chart
const scatterChart = {
  series: [
    {
      name: "Points",
      type: "scatter",
      data: [
        { x: 1, y: 2.14 },
        { x: 1.2, y: 2.19 },
        { x: 1.8, y: 2.43 },
        { x: 2.3, y: 3.8 },
        { x: 2.6, y: 4.14 },
        { x: 2.9, y: 5.4 },
        { x: 3.2, y: 5.8 },
        { x: 3.8, y: 6.04 },
        { x: 4.55, y: 6.77 },
        { x: 4.9, y: 8.1 },
        { x: 5.1, y: 9.4 },
        { x: 7.1, y: 7.14 },
        { x: 9.18, y: 8.4 },
      ],
    },
    {
      name: "Line",
      type: "line",
      data: [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 },
        { x: 5, y: 6 },
        { x: 6, y: 7 },
        { x: 7, y: 8 },
        { x: 8, y: 9 },
        { x: 9, y: 10 },
        { x: 10, y: 11 },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "line",
    },
    fill: {
      type: "solid",
    },
    markers: {
      size: [6, 0], // Size for scatter and line markers
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    colors: ["#38bdf8", "#34d399"], // Adjust colors as needed
    legend: {
      show: false,
    },
    xaxis: {
      type: "numeric",
      min: 0,
      max: 12,
      tickAmount: 12,
    },
    yaxis: {
      tickAmount: 10,
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
export { lineColumnChart, areaChart, columnAreaChart, scatterChart };
