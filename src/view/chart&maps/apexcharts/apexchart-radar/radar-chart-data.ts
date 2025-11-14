const basicRadarChart = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  options: {
    chart: {
      height: 370,
      type: "radar",
    },
    colors: ["#368FFB"], // Direct color usage
    title: {
      text: "Basic Radar Chart",
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    yaxis:{
      tickAmount: 10
    }
  },
};

//Radar – Multiple Series Chart
const multipleRadarChart = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  options: {
    chart: {
      height: 370,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: "Radar Chart - Multi Series",
    },
    colors: ["#358FFC", "#EAB308", "#22C55E"], // Directly using the hex color codes
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
    yaxis:{
      tickAmount: 10
    }
  },
};
//Radar with Polygon-fill Chart
const polygonRadarChart = {
  series: [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  options: {
    chart: {
      height: 330,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            // colors: ["#f8f8f8", "#fff"], // for background color
          },
        },
      },
    },
    title: {
      text: "Radar with Polygon Fill",
    },
    colors: ["#FF4560"], // Directly using the hex color codes
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter(val: any) {
          return val;
        },
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter(val: any, i: any) {
          return i % 2 === 0 ? val : "";
        },
      },
    },
  },
};

export { basicRadarChart, multipleRadarChart, polygonRadarChart };
