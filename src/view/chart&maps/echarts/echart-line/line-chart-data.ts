//basic line
const basicLineChart = (lineColor: string) => ({
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
  color: ["#0d6efd", "#f8f9fa", "#343a40"], // Directly set colors here
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  legend: {
    textStyle: {
      color: "#343a40", // Set color directly
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Set color directly
      },
    },
  },
  axisLine: {
    lineStyle: {
      color: "#f8f9fa", // Set color directly
    },
  },
  grid: {
    top: "5%",
    left: "6%",
    right: "0%",
    bottom: "8%",
  },
});

//smooth line
const smoothLineChart = (lineColor: string) => ({
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
  ],
  color: ["#6f42c1", "#f8f9fa", "#343a40"], // Directly set colors here
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: "#6B7280", // Direct color for horizontal lines
      },
    },
  },
  legend: {
    textStyle: {
      color: "#343a40", // Set color directly
    },
  },
  axisLine: {
    lineStyle: {
      color: lineColor, // Set color directly for axis line
    },
  },
  grid: {
    top: "5%",
    left: "6%",
    right: "0%",
    bottom: "8%",
  },
});

//Stacked Line Chart
const stackedLineChart = (lineColor: string) => ({
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
  color: ["#6f42c1", "#f59e0b", "#0d6efd", "#28a745", "#fd7e14"], // Direct color assignment
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    textStyle: {
      color: "#6B7280", // Set color directly for legend text
    },
  },
  grid: {
    top: "12%",
    left: "2%",
    right: "0%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Direct color for horizontal lines
      },
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
});

//Line Y Category
const categoryLineChart = (lineColor: string) => ({
  color: ["#6f42c1", "#f8f9fa", "#343a40"], // Direct color assignment
  legend: {
    data: ["Altitude (km) vs. temperature (°C)"],
    textStyle: {
      color: "#6B7280", // Set color directly for legend text
    },
  },
  tooltip: {
    trigger: "axis",
    formatter: "Temperature : <br/>{b}km : {c}°C",
  },
  grid: {
    left: "2%",
    right: "3%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} °C",
    },
    splitLine: {
      lineStyle: {
        color: lineColor, // Set color directly for the grid lines
      },
    },
  },
  yAxis: {
    type: "category",
    splitLine: {
      lineStyle: {
        color: lineColor, // Set color directly for the grid lines
      },
    },
    axisLine: { onZero: false },
    axisLabel: {
      formatter: "{value} km",
    },
    boundaryGap: false,
    data: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
  },
  series: [
    {
      name: "Altitude (km) vs. temperature (°C)",
      type: "line",
      symbolSize: 10,
      symbol: "circle",
      smooth: true,
      lineStyle: {
        width: 3,
        shadowColor: "rgba(0,0,0,0.3)",
        shadowBlur: 10,
        shadowOffsetY: 8,
      },
      data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5],
    },
  ],
});

//Line Step
const stepLineApp = (lineColor: string, textColor: string) => ({
  series: [
    {
      name: "Step Start",
      type: "line",
      step: "start",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Step Middle",
      type: "line",
      step: "middle",
      data: [220, 282, 201, 234, 290, 430, 410],
    },
    {
      name: "Step End",
      type: "line",
      step: "end",
      data: [450, 432, 401, 454, 590, 530, 510],
    },
  ],
  color: ["#0d6efd", "#6f42c1", "#28a745"], // Direct color assignment
  title: {
    text: "Step Line",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Step Start", "Step Middle", "Step End"],
    textStyle: {
      color: textColor, // Set color for legend text
    },
  },
  grid: {
    left: "2%",
    right: "1%",
    bottom: "1%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Set horizontal grid line color
      },
    },
    axisLine: {
      lineStyle: {
        color: "#6B7280", // Set axis line color
      },
    },
  },
});

const styleLineApp = (lineColor: string) => ({
  // #FFE000
  color: ["#0d6efd", "#6c757d", "#343a40", "#dc3545"], // Direct color assignment
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  legend: {
    textStyle: {
      color: "#343a40", // Set color for legend text
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Set color for horizontal grid lines
      },
    },
  },
  grid: {
    top: "4%",
    left: "2%",
    right: "1%",
    bottom: "1%",
    containLabel: true,
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "line",
      symbol: "triangle",
      symbolSize: 20,
      lineStyle: {
        color: "#0d6efd", // Line color
        width: 4,
        type: "dashed",
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: "#EE6666",
        color: "#FFFF00", // Item color
      },
    },
  ],
});
export {
  basicLineChart,
  smoothLineChart,
  stackedLineChart,
  categoryLineChart,
  stepLineApp,
  styleLineApp,
};
