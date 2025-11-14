import { computed } from "vue";
import { ref } from "vue";

// const theme = ref(localStorage.getItem("layoutTheme"));
const theme = computed(() => localStorage.getItem("layoutTheme"));
const basicBarChart = (lineColor: string) => ({
  color: ["#38bdf8", "#e5e7eb", "#1f2937"], // Direct color codes
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Light gray
      },
    },
  },
  legend: {
    textStyle: {
      color: "#1f2937", // Dark gray
    },
  },
  axisLine: {
    lineStyle: {
      color: "#e5e7eb", // Light gray
    },
  },
  grid: {
    top: "5%",
    left: "5%",
    right: "0%",
    bottom: "6%",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
});

const getAxisAlignBarChart = (lineColor: string) => ({
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "60%",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
  color: ["#38bdf8", "#e5e7eb", "#1f2937"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: "3%",
    left: "2%",
    right: "0%",
    bottom: "2%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        lineStyle: {
          color: lineColor, // Pass in based on theme
        },
      },
    },
  ],
});

const backgroundBarChart = (lineColor: string) => ({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  legend: {
    textStyle: {
      color: "#1f2937", // Light mode color for legend text
    },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Light mode color for horizontal lines
      },
    },
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "#f3f4f6", // Light mode color for background
      },
    },
  ],
  color: ["#10b981", "#e5e7eb", "#1f2937"], // Light mode color palette
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: "3%",
    left: "2%",
    right: "0%",
    bottom: "2%",
    containLabel: true,
  },
});

const singleBarApp = (lineColor: string) => ({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Light mode color for horizontal lines
      },
    },
  },
  series: [
    {
      data: [
        120,
        { value: 200, itemStyle: { color: "#A855F7" } }, // Specific color for this value
        150,
        80,
        70,
        110,
        130,
      ],
      type: "bar",
    },
  ],
  legend: {
    textStyle: {
      color: "#374151", // Light mode color for legend text
    },
  },
  grid: {
    top: "3%",
    left: "2%",
    right: "0%",
    bottom: "2%",
    containLabel: true,
  },
  color: ["#3692FC", "#8b5cf6", "#e5e7eb", "#1f2937"], // Light mode color palette
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
});

const getWorldPopulationBarChart = (lineColor: string, textColor: string) => ({
  title: {
    text: "World Population",
    textStyle: {
      color: textColor, // dynamic title color
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    textStyle: {
      color: textColor, // dynamic legend color
    },
  },
  series: [
    {
      name: "2011",
      type: "bar",
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
    {
      name: "2012",
      type: "bar",
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    },
  ],
  color: ["#358FFC", "#A855F7"],
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
    splitLine: {
      lineStyle: {
        color: lineColor, // dynamic horizontal grid line color
      },
    },
  },
  yAxis: {
    type: "category",
    data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
  },
});

const stackedBorderRadiusBarChart = (lineColor: string) => ({
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      stack: "a",
      name: "a",
    },
    {
      data: [10, 46, 64, "-", 0, "-", 0],
      type: "bar",
      stack: "a",
      name: "b",
    },
    {
      data: [30, "-", 0, 20, 10, "-", 0],
      type: "bar",
      stack: "a",
      name: "c",
    },
    {
      data: [30, "-", 0, 20, 10, "-", 0],
      type: "bar",
      stack: "b",
      name: "d",
    },
    {
      data: [10, 20, 150, 0, "-", 50, 10],
      type: "bar",
      stack: "b",
      name: "e",
    },
  ],
  title: {
    textStyle: {
      color: "#1f2937", // Dark text color for title
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: "3%",
    left: "3%",
    right: "0%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: lineColor, // Light gray for horizontal grid lines
      },
    },
  },
  color: ["#358FFC", "#8b5cf6", "#f59e0b", "#e5e7eb", "#1f2937"], // Direct color values for the bars
});

export {
  basicBarChart,
  getAxisAlignBarChart,
  backgroundBarChart,
  singleBarApp,
  getWorldPopulationBarChart,
  stackedBorderRadiusBarChart,
};
